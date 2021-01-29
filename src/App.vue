<template>
  <div id="app">
    <todoList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import todoList from './module/todo/view/todoList.vue'

export default Vue.extend({
  name: 'App',
  components: {
    todoList
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
