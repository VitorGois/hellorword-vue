<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols='12'>
        <div class="about">
          <v-btn width="180" height="100" @click="fetch(); show = !show">Easter</v-btn>
        </div>

        <div style="padding: 10vh">
          <v-card
            class="mx-auto"
            max-width="344"
            v-if="show"
          >
            <v-img
              :src="dog"
              height="200px"
            ></v-img>

            <v-card-title class="justify-center">
              AUAU
            </v-card-title>
          </v-card>
        </div>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'EasterEgg',
    data(){
      return {
        dog: null,
        show: false
      }
    },
    methods: {
      fetch() {
        console.log('oi');
        axios.get('https://dog.ceo/api/breeds/image/random')
          .then((res) => {
            this.dog = res.data.message;
          })
      }
    }
  }
</script>