import { setContext ,getContext} from "svelte";
import { createProblem,type ProblemStoreType } from "../stores/problemStore";


export function setProblem() {
    setContext('problem',createProblem)
}

export function getProblem() {
return getContext<ProblemStoreType>('problem')
}