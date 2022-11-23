<template>
 <div>
    <header>
        <nuxt-link to="/" class="logo">Nuxty</nuxt-link>
        <nav class="we">
            <ul class="navbar">
                 <li class="active"><nuxt-link to="/">Home</nuxt-link></li>
                 <li><nuxt-link to="about">About</nuxt-link></li>
                 <li><nuxt-link to="services">Services</nuxt-link></li>
                 <li><nuxt-link to="contact">Contact</nuxt-link></li>
                  
                <li v-if="$auth.loggedIn">
                {{ $auth.user.email}}
                 <nuxt-link to="/">Logout</nuxt-link></li>
                   
            <li v-else>
                 <li><nuxt-link to="/login">Login</nuxt-link></li>
                 <li><nuxt-link to="/register">Register</nuxt-link></li>
            </ul>
        </nav>
    </header>
 </div>
</template>

<script>
export default {
   
}
</script>
<style scoped>
    header {
        background: rgb(11, 11, 69);
        display: grid;
        grid-template-columns: repeat(3,auto);
    }
    .logo, li a {
        padding: 1em 2em;
        display: block;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        color: white;
        font-size: .9em;

    }
    nav{
        justify-self: right;
         background: rgb(11, 11, 69);
         
    }
    /* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
 
  color: black;
}

/* Active/current link */
.navbar a.active {
  background-color: #666;
   background: rgb(11, 11, 69);
}
    .nav1{
        justify-self: left;
    }
    ul{
        list-style-type: none;
    }
    li{
        display: inline;
    }
     li a{
        padding: 1em 2em;
        display: inline-block;
        background:  rgba(0,0,0,0)
    }
    div{
         position: fixed;  top: 0;
         overflow: hidden;
          width: 100%;
    }
    .we{
         background: rgb(11, 11, 69);
    }
</style>
