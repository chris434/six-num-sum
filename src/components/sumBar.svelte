<script lang="ts">
    import {getProblem} from '../contexts/problemContext'
	import DisplayBar from './displayBar.svelte';
    const problem = getProblem()
   
    $:sum = $problem.userExpression.map(({value})=>{
        return value
    }).join(' ')
    

</script>
<DisplayBar header="you" className={$problem.answerIsCorrect&&$problem.answerHasBeenChecked?'border-green-400 bg-green-400 text-white':!$problem.answerIsCorrect&&$problem.answerHasBeenChecked?'border-red-400 bg-red-400 text-white':'border-teal-400'}>
    {!$problem.userExpression.length?0:sum} = {$problem.userResult}
</DisplayBar>
