<template>
  <nav>
    <v-system-bar
      height="15"
      app
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>

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
            <v-list-item-title class="text-h6">
              {{user.name}}
            </v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item 
          v-for="link in links" 
          :key="link.text" 
          router 
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    props: ['user'],
    data: () => ({
      drawer: false,
    }),
    methods: {
      changeDrawer: function() {
        this.drawer = !this.drawer;
      }
    }
  }
</script>