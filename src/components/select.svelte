<script lang="ts" generics="T">
	import Label from "./label.svelte";

    export let options: readonly T[] 
    export let option:typeof options[number]
    export let label:string 
    export let id:string=label

</script>

<div class="flex gap-2 items-center">
    <Label htmlFor={label} {label}/>
<select  bind:value={option} {id}  class="p-4 outline-2 outline-teal-400 rounded-md  hover:border-teal-400">
{#each options as option }
    <option value={option}>{option}</option>
{/each}
</select>
</div>
