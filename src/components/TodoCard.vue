<template>
  <v-card
    class="mx-auto"
    max-width="500"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{todo.priority}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{todo.title}}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{todo.description}}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
        color="grey"
      >
        <v-img :src="todo.img"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-checkbox v-model="checkbox">
        <template v-slot:label>
          <div>
            Concluido
          </div>
        </template>
      </v-checkbox>
    </v-card-actions>
  </v-card>
</template>

<script>
export default{
  props: ['todo']
}
</script>
