<template>
    <div :id="'collapse-' + parentId" class="accordion-collapse collapse" :aria-labelledby="'heading-' + parentId"
        :data-bs-parent="'#accordion-' + accordionId">
        <div class="accordion-body">
            <div v-for="(selector, selectorIndex) in selectors" :key="selectorIndex">
                <div class="names-block mb-3 bg-light rounded-2">
                    <div v-for="(item, itemIndex) in selector.names" :key="itemIndex" class="mb-0 small">
                        <div class="d-flex align-items-center highlight-toolbar p-1 pe-3 ps-3 border-bottom">
                            <strong class="classes">
                                {{ item.text }}
                            </strong>
                            <div class="d-flex ms-auto">
                                <!-- Spinner -->
                                <div v-if="item.findFiles === null" class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <button v-else type="button" class="icon text-nowrap" @click.stop="searchFiles(item)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-search" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div class="styles-block p-3 pt-2 pb-2 rounded-2">
                            <p class="selector-style" v-for="(style, styleIndex) in selector.styles" :key="styleIndex">
                                {{ style.name }}: {{ style.value }}
                            </p>
                        </div>
                        <transition name="fade" mode="out-in">
                            <div class="alert alert-danger border-0" role="alert"
                                v-if="item.findFiles && item.findFiles.length === 0">
                                Не найден
                            </div>
                            <div v-else>
                                <div v-for="(file, fileIndex) in item.findFiles" :key="fileIndex"
                                    class="alert alert-warning border-0 pt-2 pb-2" role="alert">
                                    <p class="small"><b>{{ file.file }}</b></p>
                                    <div class="d-flex flex-column">
                                        <div v-for="(line, lineIndex) in file.lines" :key="lineIndex" class="d-flex">
                                            <div class="me-3">{{ line.num }}:</div>
                                            <div class="flex-grow-1">{{ line.text }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
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
            item.findFiles = null;

            setTimeout(async () => {
                const files = await this.$store.dispatch('findClasses', item.classes);
                item.findFiles = files;
            }, 300);
        },
    },
};
</script>

<style scoped>
.names-block {
    border: 1px solid var(--bs-border-color);
}

.names-block>p {
    line-height: 2;
}

.fa-search {
    cursor: pointer;
}

.accordion-body {
    padding-bottom: 0;
}

.styles-block {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    background-color: var(--bs-body-bg);
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

.spinner-border {
    color: var(--bs-body-color);
    --bs-spinner-border-width: 1px;
    --bs-spinner-width: 1.3rem;
    --bs-spinner-height: 1.3rem;
    margin: 5px;
}

.text-lightblue {
    color: lightblue;
}

.alert {
    --bs-alert-margin-bottom: 0;
    --bs-alert-border-radius: 0;
}

button.icon {
    display: block;
    padding: 0.5em;
    line-height: 1;
    color: var(--bs-body-color);
    background-color: var(--bd-pre-bg);
    border: 0;
    border-radius: 0.25rem;
}

button.icon:hover {
    color: var(--bs-link-hover-color);
}

.alert-warning p.small {
    margin-bottom: .4rem;
}
</style>