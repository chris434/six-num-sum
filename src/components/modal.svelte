<script lang="ts">
    import {getProblem}from '../contexts/problemContext'
	import AnswerBar from './answerBar.svelte';
	import Button from './button.svelte';
	import ConfigBar from './configBar.svelte';
	import SumBar from './sumBar.svelte';
    let dialog:HTMLDialogElement
    const problem = getProblem()
    const {reset,toggleHasBeenSubmitted}=problem

    
   $:if($problem.hasBeenSubmitted) {
    dialog.showModal()
  }
   
   function closeModal(toggle:boolean=false) {
    dialog.close()
  if(toggle) toggleHasBeenSubmitted()
   }
    
</script>

<dialog bind:this={dialog} class="sm:w-10/12 w-full  shadow-xl  absolute  z-10 outline-none p-5">
  <h2 class="text-2xl text-center mb-5">answer is correct</h2>
  <SumBar/>
  <AnswerBar/>
  <div class="flex sm:flex-row flex-col justify-center gap-5 items-center">
    <div class="flex gap-5">
       <Button onclick={()=>closeModal(true)}>close</Button>
     <Button onclick={()=>{
      closeModal()
      reset()
      }}>reset</Button>
    </div>
   
    <div>or</div>
     <ConfigBar newProblemCb={closeModal}/>
  </div>
   
</dialog>