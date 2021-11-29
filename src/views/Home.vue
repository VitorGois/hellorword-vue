<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        v-for="todo in todoList"
        :key="todo.id"
        cols="6"
        sm="6"
        md="4"
      >
        <TodoCard :todo="todo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import TodoCard from '@/components/TodoCard'

  export default {
    name: 'Home',
    components: {
      TodoCard
    },
    computed: {
      todoList() {
        return this.$store.getters.allTodos
      }
    }
  }
</script>