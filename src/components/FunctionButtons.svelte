<script lang="ts">
	import Button from "./button.svelte";
	import {getProblem}from '../contexts/problemContext'
const {clearSum,deleteLast,checkAnswer}=getProblem()
</script>

<section class="grid grid-cols-2 lg:grid-cols-4 w-full lg:text-nowrap gap-5 p-5">
<Button onclick={clearSum}>clear</Button>
<Button onclick={deleteLast}>delete</Button>
<Button onclick={checkAnswer}>check answer</Button>
</section>