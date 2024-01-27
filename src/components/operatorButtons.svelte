<script lang="ts">
	import { getProblem } from '../contexts/problemContext';
    import Button from './button.svelte'

    const OPERATORS =['+','-','*','/'] as const
     const problem=getProblem()
    const{addToSum}=problem
    $:disabled =$problem.action==='number'?true:false


</script>

<section class="flex justify-center">
<div class=" flex gap-5 {disabled?'opacity-25':''}">
     {#each OPERATORS as operator }
        <Button {disabled}  onclick={()=> addToSum({action:'operator',value:operator})} className="w-12 h-12">{operator}</Button>
    {/each}
</div>
   
</section>