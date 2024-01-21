<script lang="ts">
    import '../app.css'
	import ConfigBar from '../components/configBar.svelte';
	import { setProblem } from '../contexts/problemContext'
	import Header from '../components/header.svelte';
	import Modal from '../components/modal.svelte';

	setProblem()
</script>
<div class="relitve">
<div class="">
<Header/>
<ConfigBar padding shadow/>
<slot/>
</div>

<Modal/>
</div>

