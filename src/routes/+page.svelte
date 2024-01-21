<script>
	import FunctionButtons from "../components/FunctionButtons.svelte";
	import AnswerBar from "../components/answerBar.svelte";
	import NumberButtons from "../components/numberButtons.svelte";
	import OperatorButtons from "../components/operatorButtons.svelte";
	import SumBar from "../components/sumBar.svelte";
	import TargetBar from "../components/targetBar.svelte";
  import { getProblem } from '../contexts/problemContext';

  let toggleAnswer=false
  const problem= getProblem()




</script>
{#if $problem.numbers.length}
<div class="flex justify-center p-5 ">
  <NumberButtons/>
</div>
<div class="flex items-center p-5 flex-col">
  <div class="lg:w-5/12 md:w-7/12 sm:w-8/12 w-full  ">
  <TargetBar/>
        <SumBar/>
        {#if toggleAnswer&& $problem.answerHasBeenShown}
        <AnswerBar/>
        {/if}
        <FunctionButtons bind:toggleAnswer/>
      <OperatorButtons/>
</div>
</div>
{/if}

   

