<template>
  <v-app>
    <Navbar :user="user"/>

    <v-main>
      <router-view/>
    </v-main>
    
    <Footerbar />

  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footerbar from '@/components/Footerbar'
  
  export default {
    components: {
      Navbar, 
      Footerbar
    },
    name: 'App',
    data: () => ({
      drawer: true,
      user: {
        name: 'Vitor Gois 190810',
        email: 'vitorcgois777@gmail.com',
        picture: 'profile.jpg'
      }
    })
  }
</script>
