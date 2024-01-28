<script>
	import FunctionButtons from "../components/FunctionButtons.svelte";
	import AnswerBar from "../components/answerBar.svelte";
	import CheckAnswerBar from "../components/checkAnswerBar.svelte";
	import IncorrectAnswerBar from "../components/checkAnswerBar.svelte";
	import NumberButtons from "../components/numberButtons.svelte";
	import OperatorButtons from "../components/operatorButtons.svelte";
	import SumBar from "../components/sumBar.svelte";
	import TargetBar from "../components/targetBar.svelte";
  import { getProblem } from '../contexts/problemContext';

  let toggleAnswer=false
  const problem= getProblem()




</script>
{#if $problem.numbers.length}
<div class="flex justify-center p-5 pb-0 ">
  <NumberButtons/>
</div>
<div class="flex items-center p-5 pb-0 flex-col relative ">
  <div class="lg:w-7/12 md:w-7/12 sm:w-8/12 w-full  ">
  <TargetBar bind:toggleAnswer/>
        <SumBar/>
        {#if toggleAnswer&& $problem.answerHasBeenShown}
        <AnswerBar/>
        {/if}
        <FunctionButtons/>
</div>
</div>
<div class="items-start shadow-2xl lg:shadow-none w-full sticky lg:static bottom-0 bg-white  p-3 rounded-lg">

{#if $problem.numbersLength===6}
<CheckAnswerBar/>
{:else}
 <OperatorButtons/>
{/if}
</div>
{/if}

   

