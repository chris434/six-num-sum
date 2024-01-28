<script lang="ts">
    export let header:string
    export let correct=false
</script>
<section class=" flex justify-end sm:flex-row flex-col gap-5 items-center text-xl mb-5 relative">
    <div class="absolute -top-[15px] left-4 p-2 pt-0 bg-white">{header}</div>
<div class="w-full border-2 p-5 text-xl overflow-x-scroll whitespace-nowrap {correct?"border-green-400 text-green-900":'border-teal-400'}">
 <slot/>
</div>
</section>