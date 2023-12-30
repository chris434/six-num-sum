<script lang="ts">
	import { getProblem } from "../contexts/problemContext";
	import Button from "./button.svelte";

    const problem= getProblem()
</script>
  <div class="grid xs:grid-cols-6 grid-cols-3 gap-5" >
    {#each $problem.numbers as number }
        <Button className="w-14 h-14">{number}</Button>
    {/each}
</div>
