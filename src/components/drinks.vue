<template>
<div id="show-drinks">
    
     
    <h1>All drinks motherfuckers</h1>
      <input type="text" v-model="search" placeholder="Search" />
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
      search:""  
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
            return drink.taste.match(this.search)
              //return drink.name.match(this.search);
          });
      }
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
