<script lang="ts">
    import '../app.css'
	import { setProblem } from '../contexts/problemContext'
	import InnerLayout from '../components/innerLayout.svelte';

	setProblem()
</script>
<InnerLayout>
	<slot/>
</InnerLayout>


