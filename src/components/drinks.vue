<template>
<div id="show-drinks">
 <h1>All of our drinks</h1>
      <input type="text" v-model="search" placeholder="Search" />
      <router-link :to="{name: 'Hello'}">
  <button class="button">home</button>
   </router-link>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            
          </v-carousel-item>
        </v-carousel>
      </v-flex>
</v-layout>
     
   
    <div v-for="drink in filteredDrinks" class="single-drink">

     
    
    <h2>{{ drink.name }}</h2>
    <h3>{{drink.taste}}</h3>
    <article>{{drink.description}}</article>
    
    <ul class="ingredient-list">
        <li v-for="ingredient in drink.ingredients">{{ingredient.name}}-{{ingredient.quantity}}{{ingredient.unit}}</li>

    </ul>

    </div>
</div>
</template>
<script>

export default {
  data(){
      return{
      drinks:[],
      search:"",
     meetups: [
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/16-09-17-WikiLovesCocktails-Drink-Img0284_1.jpg', id: 'afajfjadfaadfa323', title: 'Tequila Sunrise' },
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Mojito_de_fresa_por_el_rey_del_mojito_Raimon_Social_Club.jpg', id: 'aadsfhbkhlk1241', title: 'Meetup in Paris' }
        ]
     
      }
  },
  methods: {

  },
  created() {
      this.$http.get("http://localhost:8081/rest/drink").then(function(data){
          this.drinks=data.body
  })
  },
  computed:{
      filteredDrinks:function(){
          return this.drinks.filter((drink)=>{
            //return drink.taste.match(this.search)
            var drinkTasteMatch = drink.taste.toLowerCase().match(this.search);
            var drinkIngredientMatch = drink.name.toLowerCase().match(this.search);
            if (drinkIngredientMatch || drinkTasteMatch) {
                return true;
            }else {
                return false;
            }
    //          return drink.name.match(this.search);
          });
      }
     // photo(id) {
    //     
    //      return require('/assets/' + id +'.jpg')
   //   }
  }
}
</script>
<style>
#show-drinks{
    max-width: 800px;
    margin: 0 auto;
}
.single-drink{
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    background:#eee;
}
.ingredient-list{
    background-color: aliceblue;
     padding: 20px;
    margin: 20px;
    box-sizing: border-box;
     
}



</style>
