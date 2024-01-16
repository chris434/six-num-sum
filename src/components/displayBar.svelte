<script lang="ts">
    export let className:string
    export let header:string
</script>
<section class=" flex justify-end sm:flex-row flex-col gap-5 items-center text-xl mb-5">
    <div>{header}</div>
<div class="w-full border-2 p-5 text-xl overflow-x-scroll whitespace-nowrap {className}">
 <slot/>
</div>
</section>