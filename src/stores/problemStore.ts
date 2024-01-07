import { writable } from "svelte/store";
import { getProblem, getRandomNumbers } from "../utils/sumProblem";
import { getRandomNumber } from "../utils/math";
import type { ProblemNumbersType, TargetSumRangeType, TargetSumType } from "../types/probkemTypes";
import { shuffleArray } from "../utils/array";

type ProblemActions='number' | 'operator'

type ProblemStoreType = {
    action: ProblemActions
    userExpression: {
        value: number | string
        action:ProblemActions
    }[]
    problem: {
        expression: string
        result:number
    },
    numbers:ProblemNumbersType
}

function problemStore() {
    const { subscribe, set, update } = writable< ProblemStoreType>({action:'number', userExpression:[], problem:{expression:"",result:0},numbers:[]})

   
    
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

    function addToSum(value: number|string,index?: number) {
        update((problem) => {
            const action = problem.action
            const userExpression = [...problem.userExpression, { value, action }] 
            const mappedNumbers= action==='number'? problem.numbers.map((number, i) => {
                if(i===index) return {...number,used:true}
                return number
             }):problem.numbers
            return {
                ...problem,
                userExpression,
                action: action==='number'?'operator':'number',
                numbers:mappedNumbers
            }
         
         })
    
    }

return {subscribe,generateProblem,addToSum}
}
export type ProblemStoreReturnType = ReturnType<typeof problemStore>
export const createProblem= problemStore()