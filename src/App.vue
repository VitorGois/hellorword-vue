<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view/>
    </v-main>
    
    <!-- <v-footer 
      padless 
      color="green accent-1"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vitor Gois 190810</strong>
      </v-col>
    </v-footer>

    <v-bottom-navigation
      v-model="value"
      :input-value="active"
      color="indigo"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar'
  
  export default {
    components: { Navbar },
    name: 'App',
    data () {
      return {
        
      }
    }
  }
</script>
