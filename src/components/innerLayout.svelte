<script lang="ts">
    import '../app.css'
	import { getProblem } from '../contexts/problemContext'
	import Header from './header.svelte';
	import Modal from './modal.svelte';
	import HeaderConfigBar from '../components/headerConfigBar.svelte';
    
    const problem=getProblem()
</script>
<div class="relitve {$problem.hasBeenSubmitted?'fixed':''} right-0 left-0">
<div class="sticky top-0 z-10 bg-white">
<Header/>
<HeaderConfigBar/>
</div>
<slot/>


<Modal />
</div>