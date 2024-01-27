<script lang="ts">
	import { SUM_RANGE, TARGET_RANGE } from "../data/targetOptions";
	import { getProblem } from "../contexts/problemContext";
	
	import Button from "./button.svelte";
	import Select from "./select.svelte";
	import type { TargetSumRangeType } from "../types/probkemTypes";
	import Checkbox from "./checkbox.svelte";

    let configBarToggle =true
    let sumRange:string
    let targetRange: TargetSumRangeType
    let sumRangeCheck=false
  const problem=  getProblem()
  const {generateProblem}=problem

  export let newProblemCb:()=>void=()=> {}

   function newProblem(){
    generateProblem(sumRange,targetRange,sumRangeCheck? $problem.numbers:undefined)
    newProblemCb()
    configBarToggle=false
   }
  

</script>
<section class="w-full" >
    <Button className='md:hidden block' selected={configBarToggle} onclick={()=> configBarToggle= !configBarToggle}>Config problem</Button>
    <div  class=" gap-5 items-center md:flex-row flex-col w-full justify-between mt-5 md:mt-0 {configBarToggle?'flex':'md:flex hidden'}">
       <div  class="flex gap-5 items-center md:justify-normal xs:flex-row flex-col   justify-around md:w-auto w-full">
        <Select bind:option={sumRange}   label="Sum" options={SUM_RANGE} />
        <Select bind:option={targetRange}  label="Target" options={TARGET_RANGE} />
    </div>
    <div class="flex gap-3 items-center xs2:flex-row flex-col justify-center">
      {#if $problem.numbers.length}
      <Checkbox bind:checked={sumRangeCheck} label="keep numbers"/>
      {/if}
       <Button onclick={newProblem}>New problem</Button>
    </div>
    </div>
</section>