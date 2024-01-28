<script lang="ts">
    import {getProblem} from '../contexts/problemContext'
	import Button from './button.svelte';
    const problem = getProblem()
    const{setAnswerHasBeenShown}=problem
    export let toggleAnswer =false

function setToggleAnswer(){
	toggleAnswer = !toggleAnswer
	setAnswerHasBeenShown()
}

$: if(!$problem.answerHasBeenShown) toggleAnswer=false
</script>
<div class="flex gap-3 items-center mb-5 xs:flex-row flex-col">
<div class="bg-gray-200 p-3 rounded-xl w-full text-xl ">
    Target:
    {$problem.problem.result}
</div>
<Button onclick={setToggleAnswer}>{toggleAnswer?'hide':'show'} answer</Button>
</div>
