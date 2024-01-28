<script lang="ts">
    import {getProblem} from '../contexts/problemContext'
	import DisplayBar from './displayBar.svelte';
    const problem = getProblem()
    export let correct=false
   
    $:sum = $problem.userExpression.map(({value})=>{
        return value
    }).join(' ')
    

</script>
<DisplayBar {correct} header="you">
    {!$problem.userExpression.length?0:sum} = {$problem.userResult}
</DisplayBar>
