import { writable } from "svelte/store";
import { getProblem, getRandomNumbers,getUserResult } from "../utils/sumProblem";
import { getRandomNumber } from "../utils/math";
import type { ProblemNumbersType, PropUserExpressionType, TargetSumRangeType, TargetSumType, userExpressionType } from "../types/probkemTypes";
import { shuffleArray } from "../utils/array";


type ProblemActions='number' | 'operator'

type ProblemStoreType = {
    action: ProblemActions
    userResult:number
    userExpression: userExpressionType[]
    answerHasBeenChecked: boolean
    answerIsCorrect: boolean
    problem: {
        expression: string
        result:number
    },
    numbers:ProblemNumbersType
}



function problemStore() {
    const INITIAL_DATA:ProblemStoreType={action:'number',userResult:0, userExpression:[], problem:{expression:"",result:0},numbers:[],answerHasBeenChecked:false,answerIsCorrect:false}
    const { subscribe, set, update } = writable<ProblemStoreType>(INITIAL_DATA)

   
    
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

        set({...INITIAL_DATA,...problem})
    }

    function addToSum(selectedExpression: PropUserExpressionType, index?: number) {

        update((problem) => {
            const { action, value } = selectedExpression
            const {numbers,userResult,userExpression}=problem
            
            const mappedNumbers= action==='number'? numbers.map((number, i) => {
                if(i===index) return {...number,used:true}
                return number
            }) : numbers
            
            const prevuesUserExpression = problem.userExpression.at(-1)
            const canAdd = prevuesUserExpression?.action === 'operator' && action === 'number'
            const newUserResult= canAdd? getUserResult(value,problem.userResult,prevuesUserExpression.value):action==='number'?value: userResult
            const newUserExpression = [...userExpression, { ...selectedExpression,result:newUserResult }] 
            

            
            return {
                ...problem,
                userResult:newUserResult,
                userExpression:newUserExpression,
                action:action==='number'?'operator':'number',
                numbers: mappedNumbers,
                answerHasBeenChecked:false
            }
         
         })
    
    }

    function clearSum() {
        update(problem => {
            const newNumbers = problem.numbers.map(numberObj => {
                return {...numberObj,used:false}
            })
            return {
                ...problem,
                userExpression: [],
                userResult: 0,
                action: 'number',
                numbers: newNumbers,
                answerHasBeenChecked:false
            }
        })
    }

    function checkAnswer() {
     
	

    update(problem => {
    let answerIsCorrect = false
    const userExpression = problem.userExpression
    const answer = problem.problem.result
    const userAnswer=problem.userExpression.at(-1)
    const userExpressionLength=userExpression.filter(({action})=> {
	return action==='number'
    })
    if(userExpressionLength.length===6&&userAnswer&& answer===userAnswer.result) answerIsCorrect=true
      return {
                ...problem,
                answerHasBeenChecked: true,
                answerIsCorrect
            }
        })
	
}

    function deleteLast() {
        update(problem => {
            const { userExpression } = problem
            if (!userExpression.length) return {...problem, answerHasBeenChecked:false}
            const lastUserExpression =userExpression.at(-1)
           problem.userExpression.pop()
            
            const newNumbers = lastUserExpression?.action === 'number' ? problem.numbers.map((numberObj, i) => {
                if (lastUserExpression.index === i) return { ...numberObj, used: false }
                return numberObj
            }):problem.numbers

            const newUserResult=problem.userExpression.at(-1)?.result||0
            return {
                ...problem,
                userResult:newUserResult,
                action: lastUserExpression?.action||'number' ,
                numbers: newNumbers,
                answerHasBeenChecked:false
            }
        })
    }

    function reset() {

        update(problem => {
            const { numbers, problem: innerProblem } = problem
            const newNumbers = numbers.map(numberObj => {
                return {...numberObj,used:false}
            })
            return {
                ...INITIAL_DATA,
                problem:innerProblem,
               numbers:newNumbers
            
            }
        })
    }
return {subscribe,generateProblem,addToSum,clearSum,deleteLast,checkAnswer,reset}
}
export type ProblemStoreReturnType = ReturnType<typeof problemStore>
export const createProblem= problemStore()