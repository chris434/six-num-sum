<script lang="ts">
    import {getProblem} from '../contexts/problemContext'
    import Button from './button.svelte'
    const problem=getProblem()
    const {toggleHasBeenSubmitted}=problem
    $:answerCorrect=$problem.userResult===$problem.problem.result
</script>
<div class="flex justify-center gap-3">
<div class="p-5 {answerCorrect?'bg-green-400 text-green-950':'bg-red-400 text-red-950'} w-full sm:w-6/12 rounded-xl ">
answer {answerCorrect?'correct':'incorrect'}
</div>
{#if answerCorrect}
<Button onclick={toggleHasBeenSubmitted}>submit</Button>
{/if}
</div>
