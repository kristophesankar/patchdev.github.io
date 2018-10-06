<template>
<div id="main" class="main">
  <div class="row ">
    <div class="main-headings col-md-12">
      <a href="javascript:void(0)" class="custom-nav-drawer " v-on:click="toggleNav">
        <font-awesome-icon icon="bars"   />
      </a>
    </div>
  </div>
  <section id="top" class="top-section">
		<div class="row align-items-center typed-row p-2">
      <div class="col-md-10 mx-auto">
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
  <section id="top" class="about-section">
		<div class="row align-items-center typed-row p-2">
      <div class="col-md-12 text-center mx-auto">
        <h1><strong>About</strong></h1>
          
        <div class="h-100 border-primary justify-content-center "> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas eros et mauris maximus, a ullamcorper ante porttitor. Ut purus nisl, semper et urna sed, vestibulum vehicula enim.</p>

        </div>
        <div class="row p-4">
          <div class="4"><img src="../../static/img/ksankar.jpg" alt="Kristophe Sankar" class="ksankar"> </div>
          <div class="8"></div>
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
