<template>
    <div :id="'collapse-' + parentId" class="accordion-collapse collapse" :aria-labelledby="'heading-' + parentId"
        :data-bs-parent="'#accordion-' + accordionId">
        <div class="accordion-body">
            <div v-for="(selector, selectorIndex) in selectors" :key="selectorIndex">
                <div class="names-block mb-3 p-2 bg-light rounded-3" @click="selector.showStyles = !selector.showStyles">
                    <p v-for="(item, itemIndex) in selector.names" :key="itemIndex" class="mb-0 text-muted small">
                        <i class="fas fa-search me-2" @click.stop="searchFiles(item)"></i> {{ item.text }}
                    </p>
                </div>
                <transition name="fade">
                    <div v-if="selector.showStyles" class="styles-block mb-3 p-2 bg-dark text-light rounded">
                        <p class="selector-style" v-for="(style, styleIndex) in selector.styles" :key="styleIndex">
                            {{ style.name }}: {{ style.value }}
                        </p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        parentId: String,
        accordionId: String,
        selectors: Object,
    },
    methods: {
        async searchFiles(item) {
            const result = await this.$store.dispatch('findClasses', item.classes);
            // do something with the result
            console.log(result);
            // const response = await axios.post('http://www.b1.local/test', { classes: item.classes },
            //     {
            //         headers: {
            //             'Content-Type': 'text/plain;charset=UTF-8'
            //         }
            //     });

            // // const response = await axios.post('http://www.b1.local/test', {});

            // console.log(response.data);
            // const response = await axios.get('http://www.b1.local/en/buhalterija/pajamosanaudos');
            // const response = await fetch('http://www.b1.local/test', {
            //     method: 'POST',
            //     // headers: {
            //     //     'Content-Type': 'application/json;charset=utf-8'
            //     // },
            //     body: JSON.stringify({ param1: 'value1', param2: 'value2' })
            // });

            // Обработка ответа
            // console.log(await response.text());
        },
    },
};
</script>

<style scoped>
.names-block {
    cursor: pointer;
}

.names-block>p {
    line-height: 2;
}

.accordion-body {
    padding-bottom: 0;
}

.styles-block {
    margin-top: -16px;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
}

.selector-style {
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fas.fa-search {
    color: lightblue;
}

.fas.fa-search:hover {
    color: rgb(96, 175, 201);
}
</style>