<template>
  <nav>
    <v-footer 
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
    </v-bottom-navigation>
  </nav>
</template>

<script>
  export default {
    
  }
</script>