<template>
  <div class="full-width center-content">
    <left-nav-component username="User Name" />
    <main-component pagetitle="Main Content" />
    
  </div>
</template>

<script>
import LeftNavComponent from './components/LeftNavComponent.vue'
import MainComponent from './components/MainComponent.vue'
export default {
  components: {
    LeftNavComponent,
    MainComponent
  }
}
</script>


