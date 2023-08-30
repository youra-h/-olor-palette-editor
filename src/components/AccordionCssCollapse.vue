<template>
    <div :id="'collapse-' + parentId" class="accordion-collapse collapse" :aria-labelledby="'heading-' + parentId"
        :data-bs-parent="'#accordion-' + accordionId">
        <div class="accordion-body">
            <div v-for="(selector, selectorIndex) in selectors" :key="selectorIndex">
                <div class="names-block mb-3 p-2 bg-light rounded-3">
                    <div v-for="(item, itemIndex) in selector.names" :key="itemIndex" class="mb-0 text-muted small">
                        <div>
                            <i class="fas fa-search me-2" @click.stop="searchFiles(item)"></i>
                            <span class="classes" @click="selector.showStyles = !selector.showStyles">
                                {{ item.text }}
                            </span>
                        </div>
                        <transition name="fade" mode="out-in">
                            <div v-if="item.findFiles === null" class="mt-1">
                                <!-- Spinner -->
                                <div class="spinner-border spinner-border-sm text-lightblue ml-1" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <div class="alert alert-danger mt-1" role="alert"
                                v-else-if="item.findFiles && item.findFiles.length === 0">
                                Не найден
                            </div>
                            <div v-else-if="item.findFiles">
                                <div v-for="(file, fileIndex) in item.findFiles" :key="fileIndex">
                                    <p class="text-muted small">{{ file.file }}</p>
                                    <ul>
                                        <li v-for="(line, lineIndex) in file.lines" :key="lineIndex">
                                            {{ line.num }}:
                                            <pre>{{ line.line }}</pre>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </transition>

                    </div>

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
            // инициализация массива, чтобы показать элемент
            item.findFiles = null;

            const files = await this.$store.dispatch('findClasses', item.classes);
            console.log(files);
            item.findFiles = files;
        },
    },
};
</script>

<style scoped>
.names-block>div>span.classes {
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

.fas.fa-search,
.text-lightblue {
    color: lightblue;
}

.fas.fa-search:hover {
    color: rgb(96, 175, 201);
}

.spinner-border-sm {
    width: 1rem;
    height: 1rem;
}

.text-lightblue {
    color: lightblue;
}

.alert {
    --bs-alert-margin-bottom: 0;
}
</style>