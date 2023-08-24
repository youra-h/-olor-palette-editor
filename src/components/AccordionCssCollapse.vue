<template>
    <div :id="'collapse-' + parentId" class="accordion-collapse collapse" :aria-labelledby="'heading-' + parentId"
        :data-bs-parent="'#accordion-' + accordionId">
        <div class="accordion-body">
            <div v-for="(selector, selectorIndex) in selectors" :key="selectorIndex">
                <div class="names-block mb-3 p-2 bg-light rounded-3" @click="selector.showStyles = !selector.showStyles">
                    <p v-for="(name, nameIndex) in selector.names" :key="nameIndex" class="mb-0 text-muted small">
                        {{ name }}
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
};
</script>

<style scoped>
.names-block {
    cursor: pointer;
}
.accordion-body {
    padding-bottom: 0;
}

.styles-block {
    margin-top: -16px;
    border-top-left-radius: 0!important;
    border-top-right-radius: 0!important;
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
</style>