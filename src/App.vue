<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view/>
    </v-main>
    
    <Footerbar />

  </v-app>
</template>

<script>
  import Navbar from './components/Navbar'
  import Footerbar from './components/Footerbar'
  
  export default {
    components: { Navbar, Footerbar },
    name: 'App',
    data () {
      return {
        
      }
    }
  }
</script>
