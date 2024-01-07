<script lang="ts">
	import Button from "./button.svelte";
	import {getProblem}from '../contexts/problemContext'
const {clearSum}=getProblem();

</script>

<section class="flex justify-between p-5">
<Button onclick={clearSum}>clear</Button>
</section>