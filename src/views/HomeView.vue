<script setup>

import { onMounted } from 'vue';
import { useTodoStore } from '@/stores/todo';
import { RouterLink ,useRouter } from 'vue-router';
const todoStore = useTodoStore()
onMounted(() => {
    todoStore.getTodos()
})
const remove = (index)=>{
todoStore.delete(index)
}
</script>

<template>
    <div class="shadow-xl w-1/2 m-auto bg-slate-50 p-8">
        <div class="flex justify-end"><RouterLink :to="{name:'edit'}" class="btn btn-neutral">Create Data</RouterLink ></div>
        <div v-for="data, index in todoStore.listTodo"  class="flex my-3">
            <div class="flex flex-1 gap-2 justify-between items-center">
                <div>{{ index }}</div>
                <div>
                    {{ data.bookname }}
                </div>
                <div>
                    {{ data.author }}
                </div>
                <div class="badge" :class="data.status === 'open' ? ' badge-success' : 'badge-warning'">
                    {{ data.status }}
                </div>
            </div>
            <div class="flex flex-1 justify-end gap-4">
                    <div><RouterLink :to="{name:'edit-edit',params:{id:index}}" class="btn btn-info">Edit</RouterLink></div>
                    <div><button @click="remove(index)" class="btn btn-warning">Remove</button></div>
                </div>
        </div>

    </div>

</template>
