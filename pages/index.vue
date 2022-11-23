<template>
  <section >
    <div>
    <h1 class="h1">The Nuxt Template</h1>
    <p class="subheading">We've got you</p>
    <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem aut perferendis numquam consequuntur autem dolores, ullam suscipit omnis architecto, tenetur nihil vitae debitis accusamus. Fugiat quisquam laborum hic distinctio!</p>
    </div>
    <div align="left">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ipsum iusto atque harum eos eaque aspernatur enim nesciunt maxime. Sed unde consequuntur voluptatibus labore quibusdam dignissimos quo optio animi hic!</p>
    </div>
    <div>
<label for="male">Male</label> <input type="radio" v-model="form.gender" value="male">
<label for="female">Female</label> <input type="radio" v-model="form.gender" value="female">
<label for="other">Other</label> <input type="radio" v-model="form.gender" value="other">
    </div>
    <header class="w3-display-container w3-content w3-center" style="max-width:1500px"/>
  <img class="w3-image" src="/w3images/photographer.jpg" alt="Me" width="1500" height="600">
  <div class="w3-display-middle w3-padding-large w3-border w3-wide w3-text-light-grey w3-center">
    <h1 class="w3-hide-medium w3-hide-small w3-xxxlarge">JANE DOE</h1>
    <h5 class="w3-hide-large" style="white-space:nowrap">JANE DOE</h5>
    <h3 class="w3-hide-medium w3-hide-small">PHOTOGRAPHER</h3>
  </div>
  </section>
</template>

<script>

export default {
  components: {
  },
   head() {
        return {
            title: "Home Page",
            meta: [
                { name: "description", content:  "This is my about description here."},
                { name: "keywords", content: "about nuxt, nuxt info, learn Nuxt , learn"}
            ]
        }
    },
    data () { 
         return {   
             form: { gender: null }  
               }  
               },  
               methods:
               {    checkForm (e) 
               {      this.errors = [] 
                if (!this.form.gender) 
                {        
                  this.errors.push('Gender required') 
                }}}
  }
</script>

<style>

</style>
