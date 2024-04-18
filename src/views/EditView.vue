<script setup>
import { RouterLink ,useRouter ,useRoute} from 'vue-router';
import { reactive,computed ,onMounted,ref} from 'vue';
import { useTodoStore } from '@/stores/todo';
const route = useRoute()
const router =useRouter()
const todoStore = useTodoStore()

const mode =ref('Add')

const todoIndex = ref(-1)
onMounted(()=>{

if (route.params.id) {
    mode.value = 'Edit'
    todoIndex.value = parseInt(route.params.id)
   const data =  todoStore.getTodo(todoIndex.value)
   bookData.bookname = data.bookname
   bookData.author = data.author
   bookData.status = data.status
}
})
const bookData = reactive({
    bookname:'',
    author:'',
    status: '',
})

const addBook =()=>{
    if (mode.value === 'Add') {
        todoStore.addTodo(bookData)
    }
    else{
        todoStore.editTodo(todoIndex.value,bookData)
    }
    router.push({name:'home'})
}



</script>


<template>
    <div class="shadow-xl w-1/2 m-auto bg-slate-50 p-8">
        <div>
            <div class="text-2xl font-bold">
                Book Name
            </div>
            <input v-model="bookData.bookname" type="text" placeholder="Type here" class="input input-bordered w-full " />
        </div>
        <div>
            <div class="text-2xl font-bold">
                Author
            </div>
            <input v-model="bookData.author" type="text" placeholder="Type here" class="input input-bordered w-full" />
        </div>
        <div>
            <div class="text-2xl font-bold">
                Status
            </div>
            <select v-model="bookData.status" class="select select-bordered w-full max-w-xs">
                <option v-for="status in ['open','close']" :value="status">{{ status }}</option>
            </select>
        </div>
        <div @click="addBook()"  class="w-full flex justify-end"><button class="btn btn-neutral w-1/4">{{ mode }}</button></div>
    </div>
</template>
