<template>
<div class="main">
  <div class="row">
    <div class="main-headings col-md-12"><h4 class="p-2">{{ pagetitle }}</h4></div>
  </div>
  <section id="top" class="top-section">
		<div class="row align-items-center h-50">
      <div class="col-md-12 mx-auto">
        <div class="h-100 border-primary justify-content-center text-right p6"> 
          <h1 >
            <strong>Performant<br/>Software Development<br/></strong> 
          </h1>
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
export default {
  props: {
    pagetitle: {
      type: String,
      required: true
    }
  }
};
</script>