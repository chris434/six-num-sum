import { setContext ,getContext} from "svelte";
import { createProblem,type ProblemStoreReturnType } from "../stores/problemStore";


export function setProblem() {
    setContext('problem',createProblem)
}

export function getProblem() {
return getContext<ProblemStoreReturnType>('problem')
}