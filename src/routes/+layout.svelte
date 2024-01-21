<script lang="ts">
    import '../app.css'
	import ConfigBar from '../components/configBar.svelte';
	import { setProblem } from '../contexts/problemContext'
	import Header from '../components/header.svelte';
	import Modal from '../components/modal.svelte';
	import HeaderConfigBar from '../components/headerConfigBar.svelte';

	setProblem()
</script>
<div class="relitve">
<div class="">
<Header/>
<HeaderConfigBar/>
<slot/>
</div>

<Modal />
</div>

