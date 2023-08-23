<template>
    <div>
        <button @click="addNumber">Добавить число</button>
        <NumberList :numbers="numbers" />
    </div>
</template>
  
<script>
import NumberList from './components/NumberList.vue'

export default {
    components: {
        NumberList
    },
    data() {
        return {
            numbers: []
        }
    },
    methods: {
        addNumber() {
            this.numbers.push(Math.floor(Math.random() * 100))
        }
    }
}
</script>
  