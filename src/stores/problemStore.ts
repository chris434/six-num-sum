import { writable } from "svelte/store";
import { getProblem, getRandomNumbers,getUserResult } from "../utils/sumProblem";
import { getRandomNumber } from "../utils/math";
import type { OperatorType,  ProblemNumbersType, TargetSumRangeType, TargetSumType, userExpressionType } from "../types/probkemTypes";
import { shuffleArray } from "../utils/array";


type ProblemActions='number' | 'operator'

type ProblemStoreType = {
    action: ProblemActions
    userResult:number
    userExpression: userExpressionType[]
    problem: {
        expression: string
        result:number
    },
    numbers:ProblemNumbersType
}



function problemStore() {
    const { subscribe, set, update } = writable<ProblemStoreType >({action:'number',userResult:0, userExpression:[], problem:{expression:"",result:0},numbers:[]})

   
    
    function generateProblem(sumRange: string, targetRange: TargetSumRangeType) {
 
        function setProblem(sumRange: number[], targetRange: TargetSumType) {
            const randomNumbers=getRandomNumbers(sumRange)
            const problems = getProblem(targetRange,randomNumbers)
            
      const problemsLength = problems.expressions.length
      if(problemsLength===0) return setProblem(sumRange, targetRange)
      const randomIndex = getRandomNumber(0,problemsLength)
      const problem = problems.expressions[randomIndex]
      const shuffledNumbers = shuffleArray(randomNumbers)
       return { problem,numbers:shuffledNumbers}
   }


        const sumRangeArray = sumRange.split('-').map(Number)
         const mappedTargetRange= targetRange==='any'||targetRange==='+1000'?targetRange: targetRange.split('-').map(Number)
        const problem = setProblem(sumRangeArray, mappedTargetRange)

        update(storedProblem => {
            return {...storedProblem,...problem}
        })
    }

    function addToSum(selectedExpression: userExpressionType, index?: number) {

        update((problem) => {
            const { action, value } = selectedExpression
            const {numbers,userResult,userExpression}=problem
            const newUserExpression = [...userExpression, { ...selectedExpression }] 
            
            const mappedNumbers= action==='number'? numbers.map((number, i) => {
                if(i===index) return {...number,used:true}
                return number
            }) :numbers
            
            const prevuesUserExpression = problem.userExpression.at(-1)
            const canAdd = prevuesUserExpression?.action === 'operator' && action === 'number'
            const newUserResult= canAdd? getUserResult(value,problem.userResult,prevuesUserExpression.value):action==='number'?value: userResult

            

            
            return {
                ...problem,
                userResult:newUserResult,
                userExpression:newUserExpression,
                action:action==='number'?'operator':'number',
                numbers:mappedNumbers
            }
         
         })
    
    }

return {subscribe,generateProblem,addToSum}
}
export type ProblemStoreReturnType = ReturnType<typeof problemStore>
export const createProblem= problemStore()