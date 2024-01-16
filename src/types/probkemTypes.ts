import type { TARGET_RANGE } from "../data/targetOptions"

export type TargetSumType = number[] | 'any' | '+1000'
export type TargetSumRangeType = typeof TARGET_RANGE[number]
export type ProblemNumbersType = {
    number: number
    used:boolean
}[]
export type OperatorType = '+' | '-'|'*'|'/'
export type ProblemActionsTypes='number'|'operator'
 

export type userExpressionType = {
  action:'number'
  value: number 
  index: number
  result: number
} | {
   action:'operator'
  value: OperatorType
  result: number
}
export type PropUserExpressionType = {
  action:'number'
  value: number 
  index: number
} | {
   action:'operator'
  value: OperatorType
}

export type isAnswerConstructType='unknown'|'yes'|'no'