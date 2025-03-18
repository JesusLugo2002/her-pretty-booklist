<script setup lang="ts">
import { ref } from 'vue';

const { db } = defineProps(['db'])

const title = ref('')
const author = ref('')
const saga = ref('')
const editorial = ref('')
const language = ref('')
const notes = ref('')
const cover_type = ref('')
const cover_url = ref('')

function addBook() {
    const new_book = {
        title: title.value,
        author: author.value,
        saga: saga.value,
        editorial: editorial.value,
        language: language.value,
        notes: notes.value,
        cover_type: cover_type.value,
        cover_url: cover_url.value,
        bought: false
    }
    db.addBook(new_book);
    alert("Libro añadido!")
}

function cleanFields() {
    title.value = author.value = saga.value = editorial.value = language.value = notes.value = cover_type.value = cover_url.value = ""
}
</script>

<template>
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Añadir libro
    </button>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Añadiendo un libro</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form @submit.prevent="addBook" class="form">
                <div class="modal-body">
                    <div class="row">
                        <div class="form-floating mb-3">
                            <input type="text" id="title" v-model="title" class="form-control">
                            <label for="title">Title</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-floating mb-3 col">
                            <input type="text" id="author" v-model="author" class="form-control">
                            <label for="author">Author</label>
                        </div>
                        <div class="form-floating mb-3 col">
                            <input type="text" id="editorial" v-model="editorial" class="form-control">
                            <label for="editorial">Editorial</label>
                        </div>
                    </div>
                    <div class="form-floating mb-3 col">
                        <input type="text" id="saga" v-model="saga" class="form-control">
                        <label for="saga">Saga</label>
                    </div>
                    <div class="row">
                        <select name="language" id="language" v-model="language" class="form-select col mb-3 mx-2">
                            <option value="Inglés" selected>Inglés</option>
                            <option value="Español">Español</option>
                        </select>                       
                        <select name="cover_type" id="Cover type" v-model="cover_type" class="form-select col mb-3 mx-2">
                            <option value="Tapa blanda" selected>Tapa blanda</option>
                            <option value="Tapa dura">Tapa dura</option>
                        </select>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" id="cover_url" v-model="cover_url" class="form-control">
                        <label for="cover_url">Cover url</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea id="notes" v-model="notes" class="form-control"></textarea>
                        <label for="notes">Extra notes</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" @click="cleanFields">Limpiar campos</button>
                    <input type="submit" value="Añadir libro" class="btn btn-success">
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<style>
#add-form {
    width: 100%;
    height: 100vh;
}
</style>