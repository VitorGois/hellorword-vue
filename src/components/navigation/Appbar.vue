<template>
  <nav>
    <v-app-bar
      color="green accent-2"
      height="57"
      dense
      dark
      flat
      app
    >
      <v-app-bar-nav-icon @click="changeDrawer()" class="grey--text"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>App</span>
      </v-toolbar-title>
    </v-app-bar>
  </nav>
</template>

<script>
  export default {
    props: ['drawer'],
    methods:{
      changeDrawer: function(){
        this.$emit('changeDrawer',!this.drawer);
      }
    }
  }
</script>
