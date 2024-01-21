<script lang="ts">
import Button from "./button.svelte";
import ConfigBar from "./configBar.svelte";
import {getProblem} from '../contexts/problemContext'
const problem=getProblem()
const {reset}=problem


$:numberBeenClicked=$problem.numbers.some(numberObj => numberObj.used)
$:answerHasBeenChecked= $problem.answerHasBeenChecked
$:answerHasBeenShown= $problem.answerHasBeenShown
$:canReset=  numberBeenClicked||answerHasBeenChecked||answerHasBeenShown?true:false
    
</script>

<div class="flex items-start gap-3 p-5 shadow-xl">
    <ConfigBar/>
    {#if canReset}
    <Button onclick={reset}>rest</Button>
    {/if}
</div>