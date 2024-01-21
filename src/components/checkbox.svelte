<script lang="ts">
	import Label from "./label.svelte";

    export let checked:boolean
    export let label:string
</script>
<div class="flex gap-3 items-center">
<Label htmlFor={label} {label}/>
<input id={label} bind:checked class="w-5 h-5 accent-teal-400 p-2" type="checkbox"/>
</div>