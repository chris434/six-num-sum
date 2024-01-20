<script lang="ts">
import Button from "./button.svelte";
import ConfigBar from "./configBar.svelte";
import {getProblem} from '../contexts/problemContext'
const problem=getProblem()
const {reset}=problem

    
</script>

<div class="flex items-start gap-3 p-5 shadow-xl">
    <ConfigBar/>
    {#if $problem.numbers.length}
    <Button onclick={reset}>rest</Button>
    {/if}
</div>