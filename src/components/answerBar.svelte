<script lang="ts">
    import {getProblem} from '../contexts/problemContext'
	import DisplayBar from './displayBar.svelte';
    const problem = getProblem()
</script>

<DisplayBar correct header='answer'>
{$problem.problem.expression} = {$problem.problem.result}
</DisplayBar>

