<template>
    <div class="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
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