<template>
  <div class="hello">
 
  <ol>
    <li v-for="(value) in objectItems"> 
       {{ value.name}}{{ value.taste }}
   
    </li>
   </ol>
  


      
  </div>
</template>

<script>
import sourceData from '@/data'
console.log(sourceData)

export default {
  name: 'List',
  data () {
    return { 
      objectItems:
      sourceData
      
     //{name:sourceData[0].name,}
    
     
      
      

      }
      
       
      
    }
  }

</script>
<style scoped>
#objectItems{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>