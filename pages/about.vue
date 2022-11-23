<template>
  <section >
    <div class="about-section">
    <h1 class="h1">About Our Page</h1>
    <p class="subheading">Beneficial to learn</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem aut perferendis numquam consequuntur autem dolores, ullam suscipit omnis architecto, tenetur nihil vitae debitis accusamus. Fugiat quisquam laborum hic distinctio!</p>
    </div>
      <h2 style="text-align:center">Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="~/assets/images/pexels-anjana-c-674010.jpg" />
            <div class="container">
              <h2>Saint Saint</h2>
              <p class="title">CEO</p>
              <p> Some text broefing</p>
              <p>jane@gmail</p>
              <p><nuxt-link class="button" to="/contact">contact</nuxt-link></p>
            </div>
          </div>
        </div>
      <div class="column">
          <div class="card">
            <img src="~/assets/images/pexels-anjana-c-674010.jpg"/>
            <div class="container">
              <h2> Saint Saint</h2>
              <p class="title">CEO</p>
              <p> Some text broefing</p>
              <p>jane@gmail</p>
              <p><nuxt-link class="button" to="/contact">contact</nuxt-link></p>
            </div>
          </div>
        </div>
          <div class="column">
          <div class="card">
            <img src="~/assets/images/pexels-anjana-c-674010.jpg" />
            <div class="container">
              <h2> Saint Saint</h2>
              <p class="title">CEO</p>
              <p> Some text briefing</p>
              <p>jane@gmail</p>
              <p><nuxt-link class="button" to="/contact">contact</nuxt-link></p>
            </div>
          </div>
        </div>
       </div>  
  </section>
</template>

<script>
export default {
   head() {
        return {
            title: "About Us",
            meta: [
                { name: "description", content:  "This is my about description here."},
                { name: "keywords", content: "about nuxt, nuxt info, learn Nuxt , learn"}
            ]
        }
    }

  }
</script>

<style>
section {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgb(255,250,250);
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #7E9394;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
