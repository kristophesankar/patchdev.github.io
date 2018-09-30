<template>
    <div class="sidenav text-center">
        
        <div class=""><a href="#"><strong><span style="color:white;">Patch</span><span style="color:red;">Dev</span></strong></a></div>
        <div class="mb-3 lead-consultant"><a href="#" class=" pull-right mb-3">Principal Consultant <br>
          Arjuna Sankar</a></div>   
         
        <a href="#about">Home</a>
        <a href="#about">About</a>
        <a href="#clients">Portfolio</a>
        <a href="#services">Blog</a>
        <a href="#contact">Contact</a>
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