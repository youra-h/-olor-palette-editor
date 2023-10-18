<template>
    <div class="accordion" :id="'accordion-' + data.style + index">
        <div class="accordion-item" v-for="(color, colorIndex) in data.colors" :key="colorIndex">
            <accordion-css-header :parentId="data.style + colorIndex" :color="color"></accordion-css-header>

            <accordion-css-collapse :parentId="data.style + colorIndex" :styleName="data.style" :accordionId="data.style + index"
                :selectors="color.items"></accordion-css-collapse>
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

  