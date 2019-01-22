<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <v-btn slot="activator" color="primary" dark>taste</v-btn>
      <v-card>
        <v-card-title>Select taste</v-card-title>
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
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  
</template>

<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false
      }
    }
  }
</script>