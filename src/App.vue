<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DBConnection from './firebase';

import Book from './components/Book.vue';
import AddBook from './components/AddBook.vue';

const db = new DBConnection()
const books = ref<any>([])

onMounted(async() => {
  const booksData = await db.readAll()
  if (booksData) {
    booksData.forEach(async(book) => {
      books.value.push(book)
    });
  }
})
</script>

<template>
  <div class="container">
    <ul>
      <Book v-for="book in books" :book="book" :db="db"/>
    </ul>
    <AddBook :db="db"/>
  </div>
</template>

<style>
body {
  font-family: "Caveat", serif;
  background-image: url('background.avif');
  background-repeat: repeat-y;
  background-size: cover;
  background-position: -40px;
}
</style>