<template>
<div id="main" class="main">
  <div class="row ">
    <div class="main-headings col-md-12">
      <a href="javascript:void(0)" class="custom-nav-drawer " id="custom-nav-drawer" v-on:click="toggleNav">
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
          <button class="btn btn-primary">Portfolio</button>
        </div>
      </div>
		</div>
	</section>
  <section id="top" class="about-section">
		<div class="row align-items-center typed-row p-2">
      <div class="col-md-12 text-center mx-auto">
        <h1><strong>About</strong></h1>
          
        <div class="h-100 border-primary justify-content-center "> 
            <p>I'm, Kristophe, a Full Stack Developer from the Caribbean who loves being creative with a computer. Since starting my journey as a software developer I've touched on many different industries 
              including, most notably,<br>  healthcare, e-commerce, and education.</p>

        </div>
        <div class="row p-4 justify-content-center">
          <div class="col-md-4"><img src="../../static/img/ksankar.jpg" alt="Kristophe Sankar" class="ksankar"><br><p class="mt-1 font-weight-light font-italic about-author-footer">&nbsp;Kristophe Sankar <br> Full Stack Developer </p></div>
         
        </div>
      </div>
		</div>
	</section>

  <section id="top" class="skillset-section">
		<div class="row align-items-center typed-row p-2">
      <div class="col-md-12 text-center mx-auto">
        <h1><strong>My Skills</strong></h1>
          <div class="h-100 border-primary justify-content-center "> 
            <p>I enjoy learning new methodologies and technologies both on the job and in my free time.</p>

        </div>

        <div class="row mt-3 justify-content-center">

          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-header">
                Architect
              </div>
              <div class="card-body">
                <h5 class="card-title"> 
                  Interested In</h5>
                <p class="card-text badge badge-info">Pattern Oriented</p>
                <p class="card-text badge badge-info">Data Driven</p>
                <p class="card-text badge badge-info">Test Driven</p>
                <p class="card-text badge badge-info">Behaviour Driven Design</p>

           
              </div>
              <div class="card-footer text-muted">
                <a href="https://github.com/kristophesankar" class="btn btn-primary">Books I Like</a>
              </div>
            </div>

          </div>
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-header">
                Developer
              </div>
              <div class="card-body">
                <h5 class="card-title">My Proficiencies </h5>
                <p class="card-text badge badge-info">Javascript</p>
                <p class="card-text badge badge-info">HTML</p>
                <p class="card-text badge badge-info">CSS</p>
                <p class="card-text badge badge-info">React</p>
                <p class="card-text badge badge-info">PHP</p>
                <p class="card-text badge badge-info">Java</p>
                <p class="card-text badge badge-info">C#</p>
                <p class="card-text badge badge-info">SQL</p>
           
              </div>
              <div class="card-footer text-muted">
                <a href="https://github.com/kristophesankar" class="btn btn-primary">View my Github</a>
              </div>
            </div>

          </div>
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-header">
                Creative
              </div>
              <div class="card-body">
                <h5 class="card-title">I Enjoy </h5>
                <p class="card-text badge badge-info">Music Production</p>
                <p class="card-text badge badge-info">Playing Instruments</p>
                <p class="card-text badge badge-info">Ableton Live</p>
                <p class="card-text badge badge-info">Adobe Illustrator</p>
           
              </div>
              <div class="card-footer text-muted">
                <a href="https://github.com/kristophesankar" class="btn btn-primary">My Audiojungle</a>
              </div>
            </div>

          </div>

        </div>

      </div>
		</div>
	</section>
  
</div>
</template>

<script src="../js/MainComponent.js" ></script>
