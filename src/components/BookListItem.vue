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
    <li :class="'list-group-item ' + (is_bought ? 'bg-success-subtle' : 'bg-light')">
        <div class="row">
            <div class="col-10">
                <p><b>{{ book.title }}</b> by {{ book.author }}</p>
            </div>
            <div class="col">
                <button :class="'btn w-100 ' + (is_bought ? 'btn-danger' : 'btn-success')" @click="toggleBought">
                    {{ is_bought ? 'Desmarcar' : 'Marcar' }}
                </button>
            </div>
        </div>
    </li>
</template>