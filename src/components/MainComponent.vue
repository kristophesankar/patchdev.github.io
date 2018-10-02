<template>
<div class="main">
  <div class="row">
    <div class="main-headings col-md-12">
      <a href="javascript:void(0)" >
        <font-awesome-icon icon="bars" class="pull-right"  />
      </a>
        
    </div>

  </div>
  <section id="top" class="top-section">
		<div class="row align-items-center h-50">
      <div class="col-md-12 mx-auto">
        <div class="h-100 border-primary justify-content-center text-right p6"> 
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
import Vue from 'vue'
import { VueTypedJs } from 'vue-typed-js'

export default {
  components: {
    VueTypedJs
  },
  props: {
    pagetitle: {
      type: String,
      required: false
    }
  }
};
</script>
