<script>
	import NumberButtons from "../components/numberButtons.svelte";
	import OperatorButtons from "../components/operatorButtons.svelte";
	import SumBar from "../components/sumBar.svelte";
	import TargetBar from "../components/targetBar.svelte";





</script>
<div class="flex justify-center p-5 ">
  <NumberButtons/>
</div>
<div class="flex items-center p-5 flex-col">
  <div class="lg:w-4/12 md:w-6/12 sm:w-8/12 w-full  ">
  <TargetBar/>
        <SumBar/>
      <OperatorButtons/>
</div>
</div>

   

