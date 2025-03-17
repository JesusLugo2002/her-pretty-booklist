<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DBConnection from './firebase';

import BookItem from './components/BookItem.vue';
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
  <div class="container pb-3">
    <ul>
      <BookItem v-for="book in books" :book="book" :db="db"/>
    </ul>
    <AddBook :db="db"/>
  </div>
</template>

<style>
body {
  font-family: "Caveat", serif;
  background-image: url('background.webp');
  background-repeat: repeat-y;
  background-size: cover;
  background-position: -40px;
}
</style>