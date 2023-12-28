import { getRandomNumber } from "./math";

type ResultsType = {
    expression:string
    result: number
}
type RangeType = number[]|null

function calculate(expression: string) {
  const operators = expression.split(/[\d.]+/).filter(Boolean);
  const numbers = expression.split(/[+\-*/]/).map(Number);
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
      case '+':
        result += numbers[i + 1];
        break;
      case '-':
        result -= numbers[i + 1];
        break;
      case '*':
        result *= numbers[i + 1];
        break;
      case '/':
        if (numbers[i + 1] !== 0) {
          result /= numbers[i + 1];
        } else {
          return undefined; // Avoid division by zero
        }
        break;
      default:
        break;
    }
  }

  return result;
}

function getRandomNumbers(sumRange:RangeType) {
    const [min, max] =sumRange||[1,1000]
    const randomNumbers = []
    for (let i = 0; i < 6; i++) {
         randomNumbers.push(getRandomNumber(min, max))
        
    }
    return randomNumbers
}

function findAllExpressions(numbers:number[],targetRange:RangeType) {
    const results: ResultsType[] = [];
    const [min,max] = targetRange||[-1,-1]

  function generateExpressions(currentExpression:string, remainingNumbers:number[]) {
    if (remainingNumbers.length === 0) {
        const result = calculate(currentExpression);
        const formattedResult=new RegExp(/\.|-/).test(result?.toString()||'')
      if (result&&!formattedResult&&min===-1||result&& result>=min&&result<=max&&!formattedResult) {
        results.push({ expression: currentExpression,result });
      }
      return;
    }

    const currentNumber = remainingNumbers[0];
    const restNumbers = remainingNumbers.slice(1);

    generateExpressions(`${currentExpression}+${currentNumber}`, restNumbers);
    generateExpressions(`${currentExpression}-${currentNumber}`, restNumbers);
    generateExpressions(`${currentExpression}*${currentNumber}`, restNumbers);

    if (currentNumber !== 0) {
      generateExpressions(`${currentExpression}/${currentNumber}`, restNumbers);
    }
  }

  generateExpressions(numbers[0].toString(), numbers.slice(1));

  return results;
}

export function getProblem(sumRange:RangeType,targetRange:RangeType) {
    const randomNumbers=getRandomNumbers(sumRange)
    const expressions = findAllExpressions(randomNumbers, targetRange);
   
    return { expressions,numbers:randomNumbers }
}



