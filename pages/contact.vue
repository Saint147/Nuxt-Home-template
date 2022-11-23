<template>
  <section>
    <div class="about-section">
    <h1>Contact Us</h1>
    <p class="subheading">Be free and Reach Out </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem aut perferendis numquam consequuntur autem dolores, ullam suscipit omnis architecto, tenetur nihil vitae debitis accusamus. Fugiat quisquam laborum hic distinctio!</p>
    </div>
    <div class="container">
  <div style="text-align:center">
    <h2>Reach Out To Saint || </h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
      <nuxt-img href="/assets/images/pexels-anjana-c-674010.jpg" quality="80" width="200" height="100"/>
    </div>
    <div class="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="australia">South Africa</option>
          <option value="canada">India</option>
          <option value="usa">Spain</option>
          <option value="australia">Urugua</option>
          <option value="canada">Netherlands</option>
          <option value="usa">Brazil</option>
          <option value="australia">Senegal</option>
          <option value="canada">Zimbabwe</option>
          <option value="usa">Namibia</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</div>
  </section>
</template>

<script>
export default {
   head() {
        return {
            title: "Contact",
            meta: [
                { name: "description", content:  "This is my about description here."},
                { name: "keywords", content: "about nuxt, nuxt info, learn Nuxt , learn"}
            ]
        }
    }

  }
</script>
<style>
div {
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

/* Style inputs */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* Style the container/contact section */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
}

/* Create two columns that float next to eachother */
.column {
  float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
.about-section {
  padding: 50px;
  text-align: center;
  background-color: #7E9394;
  color: white;
}
</style>
