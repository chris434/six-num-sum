<script lang="ts">
	import { getProblem } from '../contexts/problemContext';
    import Button from './button.svelte'

    const OPERATORS =['+','-','*','/'] 
     const problem=getProblem()
    const{addToSum}=problem
    $:disabled =$problem.action==='number'?true:false


</script>

<section class="flex  justify-between gap-5 p-3  rounded-lg {disabled?'opacity-25':''}">
    {#if $problem.numbers.length}
    {#each OPERATORS as operator }
        <Button {disabled}  onclick={()=> addToSum(operator)} className="w-12 h-12">{operator}</Button>
    {/each}
    {/if}
</section>