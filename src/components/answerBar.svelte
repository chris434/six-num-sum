<script lang="ts">
    import {getProblem} from '../contexts/problemContext'
    const problem = getProblem()
</script>

<section class="w-full border-2 p-5 border-teal-400 text-xl">
{$problem.problem.expression} = {$problem.problem.result}
</section>
