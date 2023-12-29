<script lang="ts">
    import '../app.css'
	import ConfigBar from '../components/configBar.svelte';
	import { setProblem } from '../contexts/problemContext'
	import Header from '../components/header.svelte';

	setProblem()
</script>
<Header/>
<ConfigBar/>
<slot/>