<script lang="ts">
	import Button from "./button.svelte";
	import {getProblem}from '../contexts/problemContext'
const {clearSum,deleteLast}=getProblem();
export let toggleAnswer =false

</script>

<section class="flex justify-center gap-5 p-5">
<Button onclick={clearSum}>clear</Button>
<Button onclick={deleteLast}>delete</Button>
<Button onclick={()=>toggleAnswer = !toggleAnswer}>{toggleAnswer?'hide':'show'} answer</Button>
</section>