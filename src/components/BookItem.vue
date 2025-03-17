<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['book', 'db'])

const is_bought = ref(props.book.bought)

function toggleBought() {
    is_bought.value = !is_bought.value;
    const book_data = props.book
    book_data["bought"] = is_bought.value
    props.db.update(book_data["id"], book_data)
}
</script>

<template>
    <li :class="'row my-5 p-3 rounded border ' + (is_bought ? 'bg-success-subtle' : 'bg-light')">
        <img :src="book.cover_url" :alt="book.title + ' cover'" class="col-2 img-fluid rounded">
        <div class="col">
            <h1>{{ book.title }}</h1>
            <h2>Por {{ book.author }}</h2>

            <p><b>Editorial:</b> {{ book.editorial }}</p>
            <p><b>Idioma:</b> {{ book.language }}</p>
            <p><b>{{ book.cover_type }}</b></p>
            <p v-if="book.saga"><b>Saga:</b> {{ book.saga }}</p>
            <h5 v-if="book.notes">{{ book.notes }}</h5>
        </div>
        <div class="col d-flex justify-content-center align-items-center" v-if="is_bought">
            <img src="/check-bought.webp" alt="Bought check" class="img-fluid w-50">
        </div>

        <div class="col-2">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
                <button class="btn btn-success w-100" @click="toggleBought">Marcar</button>
            </div>
        </div>
    </li>
</template>

<style scoped>
p, h1, h2, h5 {
  font-family: "Caveat", serif;
}

p {
    margin: 0;
}

li {
    transition: 0.3s;
}

li:hover {
    transform: scale(1.03);
}
</style>