<script lang="ts">
    import '../app.css'
	import { setProblem } from '../contexts/problemContext'
	import Header from '../components/header.svelte';
	import Modal from '../components/modal.svelte';
	import HeaderConfigBar from '../components/headerConfigBar.svelte';

	setProblem()
</script>
<div class="relitve">
<div class="">
<div class="sticky top-0 z-10 bg-white">
<Header/>
<HeaderConfigBar/>
</div>
<slot/>
</div>

<Modal />
</div>

