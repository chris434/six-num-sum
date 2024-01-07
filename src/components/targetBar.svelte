<script lang="ts">
    import {getProblem} from '../contexts/problemContext'
    const problem = getProblem()
</script>

<div class="bg-gray-200 p-3 rounded-xl text-xl w-full mb-5">
    Target:
    {$problem.problem.result}
</div>