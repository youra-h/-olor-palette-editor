<template>
    <div>
        <div class="d-flex align-items-start mt-3">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button
                    v-for="(item, index) in files"
                    :key="index"
                    class="nav-link"
                    :class="{ active: index === 0 }"
                    :id="`v-pills-${item.fileName}-tab`"
                    data-bs-toggle="pill"
                    :data-bs-target="`#v-pills-${item.fileName}`"
                    type="button"
                    role="tab"
                    :aria-controls="`v-pills-${item.fileName}`"
                    :aria-selected="index === 0"
                >
                    {{ item.fileName }}
                </button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
                <div
                    v-for="(item, index) in files"
                    :key="index"
                    class="tab-pane fade"
                    :class="{ 'show active': index === 0 }"
                    :id="`v-pills-${item.fileName}`"
                    role="tabpanel"
                    :aria-labelledby="`v-pills-${item.fileName}-tab`"
                >
                    <tab-styles :data="item.css.groups"></tab-styles>
                    <!-- <accordion-css :index="index" :data="item.css.common"></accordion-css> -->
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import TabStyles from './TabStyles.vue';
// import AccordionCss from './AccordionCss.vue';

export default {
    components: {
        TabStyles,
        // AccordionCss,
    },
    props: {
        files: {}
    }
}

</script>
  
<style scoped>

.tab-content {
    width: 100%;
    padding-top: 0;
}

</style>
  