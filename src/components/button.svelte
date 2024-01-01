<script lang="ts">
    export let onclick:()=>void=()=>{}
    export let selected=false
    export let className=''
    export let disabled=false
</script>


<button {disabled} on:click={onclick} class="bg-teal-400  p-3 rounded-md border-teal-400 border-2 hover:bg-white hover:text-teal-400 {disabled?'opacity-25':''} {className} {selected?'bg-white hover:bg-teal-400 hover:text-white text-teal-400':' text-white'}">
    <slot/>
</button>