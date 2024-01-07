<script lang="ts">
    import {getProblem} from '../contexts/problemContext'
    const problem = getProblem()
    $:sum = $problem.userExpression.map(({value})=>{
        return value
    }).join(' ')
</script>
<section class="w-full border-2 p-5 border-teal-400 mb-5">
    <div class="text-xl">{!$problem.userExpression.length?0:sum} = {$problem.userResult}</div>
</section>