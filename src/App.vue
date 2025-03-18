<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DBConnection from './firebase';

import BookItem from './components/BookItem.vue';
import AddBook from './components/AddBook.vue';

const db = new DBConnection()
const books = ref<any>([])

const show_mode = ref("cards")

onMounted(async() => {
  const booksData = await db.readAll()
  if (booksData) {
    booksData.forEach(async(book) => {
      books.value.push(book)
    });
    books.value.sort((a: any, b: any) => a.author.localeCompare(b.author))
  }
})
</script>

<template>
  <div class="container pb-3">
    <h1 class="text-center">My Pretty Booklist (for my queen)</h1>
    <div v-if="show_mode == 'cards'">
      <ul>
        <BookItem v-for="book in books" :book="book" :db="db"/>
      </ul>
    </div>
    <AddBook :db="db"/>
  </div>
</template>

<style>
body, h1 {
  font-family: "Caveat", serif;
  background-image: url('background.webp');
  background-repeat: repeat-y;
  background-size: cover;
  background-position: -40px;
}
</style>