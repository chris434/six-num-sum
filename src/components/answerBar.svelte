<script lang="ts">
    import {getProblem} from '../contexts/problemContext'
	import DisplayBar from './displayBar.svelte';
    const problem = getProblem()
</script>

<DisplayBar header='answer' className='border-green-400 bg-green-400 text-white '>
{$problem.problem.expression} = {$problem.problem.result}
</DisplayBar>
