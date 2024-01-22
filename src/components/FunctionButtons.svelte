<script lang="ts">
	import Button from "./button.svelte";
	import {getProblem}from '../contexts/problemContext'
const problem=getProblem();
const {clearSum,deleteLast,checkAnswer,setAnswerHasBeenShown}=problem
export let toggleAnswer =false

function setToggleAnswer(){
	toggleAnswer = !toggleAnswer
	setAnswerHasBeenShown()
}

$: if(!$problem.answerHasBeenShown) toggleAnswer=false


</script>

<section class="grid grid-cols-2 lg:grid-cols-4 w-full lg:text-nowrap gap-5 p-5">
<Button onclick={clearSum}>clear</Button>
<Button onclick={deleteLast}>delete</Button>
<Button onclick={checkAnswer}>check answer</Button>
<Button onclick={setToggleAnswer}>{toggleAnswer?'hide':'show'} answer</Button>
</section>