<script lang="ts">
    import {getProblem}from '../contexts/problemContext'
	import AnswerBar from './answerBar.svelte';
	import Button from './button.svelte';
	import SumBar from './sumBar.svelte';
    let dialog:HTMLDialogElement
    const problem = getProblem()
    
   $:if(dialog&&$problem.answerHasBeenChecked&&$problem.answerIsCorrect) dialog.showModal()

   function closeModal() {
    dialog.close()
   }
    
</script>

<dialog bind:this={dialog} class="sm:w-10/12 w-full  shadow-xl  absolute  z-10 outline-none p-5">
  <h2 class="text-2xl text-center mb-5">answer is correct</h2>
  <SumBar/>
  <AnswerBar/>
  <div class="flex sm:flex-row flex-col justify-center gap-5 p-5">
    <Button onclick={closeModal}>close</Button>
     <Button>reset</Button>
      <Button>new problem</Button>
  </div>
</dialog>