<template>
    <div id="sidenav" class="sidenav">
        
        <div class=""><a href="#"><strong><span style="color:white;">Patch</span><span style="color:red;">Dev</span></strong></a></div>
        <div class="mb-3 lead-consultant"><a href="#" class=" pull-right mb-3"><span style="color:white;"><strong>&lt; Logically Creative /&gt;</strong></span></a></div>   
         
        <a href="#top">Home <font-awesome-icon icon="home" class="float-right mt-1 mr-2"  /></a>
        <a href="#about">About <font-awesome-icon icon="question-circle" class="float-right mt-1 mr-2"  /></a>
        <a href="#skills">Skills <font-awesome-icon icon="wrench" class="float-right mt-1 mr-2"  /></a>
        <a href="#portfolio">Portfolio <font-awesome-icon icon="images" class="float-right mt-1 mr-2"  /></a>
        <a href="#contact">Contact <font-awesome-icon icon="envelope" class="float-right mt-1 mr-2"  /></a>
    </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    }
  }
};
</script>