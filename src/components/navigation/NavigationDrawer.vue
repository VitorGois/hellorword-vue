<template>
  <v-navigation-drawer 
    app 
    v-model="drawer" 
    class="green accent-2"
  >
    <v-list>
      <v-list-item class="px-3">
        <v-list-item-avatar size="70">
          <v-img :src="user.picture"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">{{user.name}}</v-list-item-title>
          <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item 
        v-for="component in menuComponents"
        :key="component.text" 
        router 
        :to="component.route"
      >
        <v-list-item-action>
          <v-icon class="white--text">{{ component.icon }}</v-icon>
        </v-list-item-action>
        
        <v-list-item-content>
          <v-list-item-title class="white--text">{{ component.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: ['drawer'],
    data() {
      return {
        user: this.$store.state.user,
        menuComponents: this.$store.state.menuComponents
      }
    }
  }
</script>
