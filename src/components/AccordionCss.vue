<template>
    <div class="accordion" :id="'accordion-' + data.style + index">
        <div class="accordion-item" v-for="(color, colorIndex) in data.colors" :key="colorIndex">
            <accordion-css-header :parentId="data.style + colorIndex" :color="color"></accordion-css-header>

            <accordion-css-collapse :parent-id="data.style + colorIndex" :style-name="data.style"
                :accordion-id="data.style + index" :color="color"></accordion-css-collapse>
        </div>
    </div>
</template>

<script>
import AccordionCssHeader from './AccordionCssHeader.vue';
import AccordionCssCollapse from './AccordionCssCollapse.vue';


export default {
    components: {
        AccordionCssHeader,
        AccordionCssCollapse
    },
    props: {
        index: Number,
        data: Object,
    },
};
</script>

<style>
.accordion {
    --bs-accordion-btn-padding-y: 5px;
}

.accordion-item {
    border: none;
}
</style>

  