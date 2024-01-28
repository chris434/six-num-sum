<script lang="ts">
	import { getProblem } from "../contexts/problemContext";
	import Button from "./button.svelte";

    const problem= getProblem()
    const {addToSum}=problem
    $:disabled =$problem.action==='operator'?true:false
$:console.log($problem)
</script>
  <div class="grid xs:grid-cols-6 grid-cols-3 gap-5" >
    {#each $problem.numbers as {number,used},i}
        <Button disabled={used||disabled} selected={used} onclick={()=> addToSum({action:'number',value:number,index:i},i)} className="w-14 h-14">{number}</Button>
    {/each}
</div>
