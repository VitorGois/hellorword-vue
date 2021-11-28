<template>
  <v-app>
    <Systembar/>
    <Appbar 
      :drawer="drawer"
      @changeDrawer="changeDrawer($event)" 
    />
    <NavigationDrawer
      :drawer="drawer"
    />
    
    <v-main>
      <router-view/>
    </v-main>
    
    <Footerbar />
    <BottomNavigation />
  </v-app>
</template>

<script>
  import Systembar from '@/components/navigation/Systembar'
  import Appbar from '@/components/navigation/Appbar'
  import NavigationDrawer from '@/components/navigation/NavigationDrawer'
  import Footerbar from '@/components/navigation/Footerbar'
  import BottomNavigation from '@/components/navigation/BottomNavigation'
  
  export default {
    components: {
      Systembar,
      Appbar,
      NavigationDrawer,
      Footerbar,
      BottomNavigation,
    },
    name: 'App',
    data: () => ({
      drawer: true,
    }),
    methods: {
      changeDrawer: function(drawer){
        this.drawer = drawer;
      }
    }
  }
</script>
