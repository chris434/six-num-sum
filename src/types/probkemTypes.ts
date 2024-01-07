import type { TARGET_RANGE } from "../data/targetOptions"

export type TargetSumType = number[] | 'any' | '+1000'
export type TargetSumRangeType = typeof TARGET_RANGE[number]
export type ProblemNumbersType = {
    number: number
    used:boolean
}[]
export type OperatorType = '+' | '-'|'*'|'/'
export type ProblemActionsTypes='number'|'operator'
 
// export type userExpressionType = {
//   value: number | OperatorType
// action:ProblemActionsType
// }

export type userExpressionType = {
  action:'number'
  value: number 
} | {
   action:'operator'
  value: OperatorType
}