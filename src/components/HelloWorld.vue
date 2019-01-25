<template>
  <div >
    
    <h1>{{ msg }}</h1>
   
 
 
   <input type="text" placeholder="Search">
   
   <v-dialog v-model="dialog" scrollable max-width="300px">
   
      <v-btn slot="activator" color="primary" dark>FILTER</v-btn>
    
      <v-card>
        <v-card-title>Select what to filter by:</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
           <v-checkbox
              v-model="ex4"
              label="sweet"
             
              value="sweet"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="salty"
             
              value="salty"
              hide-details
            ></v-checkbox>
          
            <v-checkbox
              v-model="ex4"
              label="sour"
             
              value="sour"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="bitter"
             
              value="bitter"
              hide-details
            ></v-checkbox>
         
            <v-checkbox
              v-model="ex4"
              label="spicy"
              
              value="spicy"
              hide-details
            ></v-checkbox>
       

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" v-on:click.prevent="get">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
   <router-link :to="{name: 'drinks'}">
      
  <li><a href="#drinks">Drinks</a></li>
  </router-link>
  <li><a href="#about">About</a></li>
  <router-link :to="{name: 'signup'}">
  <li style="float:right"><button class="button">Sign up</button></li>
  </router-link>
   <router-link :to="{name: 'signin'}">
  <li style="float:right"><button class="button">Sign in</button></li>
   </router-link>
</ul>
     <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
</v-layout>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to DRINKING PROJECT',
      dialogm1: '',
      dialog: false,
       meetups: [
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg', id: 'afajfjadfaadfa323', title: 'Tequila Sunrise' },
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg', id: 'aadsfhbkhlk1241', title: 'Meetup in Paris' }
        ]
    }
  },
  methods: {
    get: function(){
      this.$http.get("http://localhost:8081/rest/drink")
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
