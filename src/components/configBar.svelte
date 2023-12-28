<script>
	import Button from "./button.svelte";
	import Select from "./select.svelte";
    const options =['any','1-10','10-100','100-1000','1000+']
    let configBarToggle =true

</script>
<section class="p-5 shadow-xl" >
    <Button className='md:hidden block' selected={configBarToggle} onclick={()=> configBarToggle= !configBarToggle}>Config problem</Button>
    <div class=" gap-5 items-center md:flex-row flex-col w-full justify-between mt-5 md:mt-0 {configBarToggle?'flex':'md:flex hidden'}">
       <div class="flex gap-5 items-center md:justify-normal xs:flex-row flex-col   justify-around md:w-auto w-full">
       <Select label="Sum" {options}/>
       <Select label="Target" {options}/>
    </div>
    <div class="flex gap-3 items-center xs2:flex-row flex-col justify-center">
       <Button>New problem</Button>
        <div>or</div>
        <Button>Use same problem</Button>
    </div>
    </div>
</section>