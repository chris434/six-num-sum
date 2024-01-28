<script lang="ts">
	import Button from "./button.svelte";
	import {getProblem}from '../contexts/problemContext'
const {clearSum,deleteLast,checkAnswer}=getProblem()
</script>

<section class="flex justify-center w-full lg:text-nowrap gap-5 p-5 pt-0">
<Button onclick={clearSum}>clear</Button>
<Button onclick={deleteLast}>delete</Button>
</section>

