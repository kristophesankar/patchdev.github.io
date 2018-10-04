<template>
<div id="main" class="main">
  <div class="row">
    <div class="main-headings col-md-12">
          <a href="javascript:void(0)" class="custom-nav-drawer " v-on:click="toggleNav">
            <font-awesome-icon icon="bars" class="pull-right"  />
          </a>
        </div>
  </div>
  <section id="top" class="top-section">
		<div class="row align-items-center">
      <div class="col-md-12 mx-auto">
        <div class="h-100 border-primary justify-content-center text-right "> 
          <vue-typed-js :strings="[`Agile^1000`,`Data Driven^1000`, `Pattern Oriented^1000`, `Test Driven^1000`,`Performant^1000`, ]" :typeSpeed="90" :backSpeed="90" >
            <h1 >
              <strong><span class="typing"></span><br/>Software Development<br/></strong> 
            </h1>
          </vue-typed-js>
          <p>Learn how I can help you</p>
          <button class="btn btn-primary">Services</button>
        </div>
      </div>
		</div>
	</section>
  <div class="row">
    <div class="col-md-12">

  
    </div>
  </div>
  
</div>
</template>

<script>
import Vue from "vue";
import { VueTypedJs } from "vue-typed-js";

export default {
  components: {
    VueTypedJs
  },
  methods: {
    toggleNav: function() {
      let element = document.getElementById("sidenav");
      //if class is closed
      if (element.classList.contains("nav-closed")) {
        document.getElementById("sidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        element.classList.add("nav-open");
        if (element.classList.contains("nav-closed")) {
          element.classList.remove("nav-closed");
        }
      } else {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        element.classList.add("nav-closed");
        if (element.classList.contains("nav-open")) {
          element.classList.remove("nav-open");
        }
      }
    }
  },
  props: {
    pagetitle: {
      type: String,
      required: false
    }
  }
};
</script>
