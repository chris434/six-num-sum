import { writable } from "svelte/store";
import { getProblem, getRandomNumbers } from "../utils/sumProblem";
import { getRandomNumber } from "../utils/math";
import type { TargetSumRangeType, TargetSumType } from "../types/probkemTypes";
import { shuffleArray } from "../utils/array";

type ProblemStoreType = {
    problem: {
        expression: string
        result:number
    },
    numbers:number[]
}

function problemStore() {
    const { subscribe, set, update } = writable< ProblemStoreType>({problem:{expression:"",result:0},numbers:[]})

   
    
    function generateProblem(sumRange: string, targetRange: TargetSumRangeType) {
 
        function setProblem(sumRange: number[], targetRange: TargetSumType) {
            const randomNumbers=getRandomNumbers(sumRange)
            const problems = getProblem(targetRange,randomNumbers)
            
      const problemsLength = problems.expressions.length
      if(problemsLength===0) return setProblem(sumRange, targetRange)
      const randomIndex = getRandomNumber(0,problemsLength)
      const problem = problems.expressions[randomIndex]
      const shuffledNumbers = shuffleArray(randomNumbers)
       return {problem,numbers:shuffledNumbers}
   }


        const sumRangeArray = sumRange.split('-').map(Number)
         const mappedTargetRange= targetRange==='any'||targetRange==='+1000'?targetRange: targetRange.split('-').map(Number)
        const problem = setProblem(sumRangeArray, mappedTargetRange)
        set(problem)
    }

return {subscribe,generateProblem}
}
export type ProblemStoreReturnType = ReturnType<typeof problemStore>
export const createProblem= problemStore()