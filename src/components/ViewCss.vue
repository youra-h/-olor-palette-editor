<template>
    <div>
        <div class="d-flex align-items-start mt-3">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button
                    v-for="(item, index) in cssFiles"
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
                    v-for="(item, index) in cssFiles"
                    :key="index"
                    class="tab-pane fade"
                    :class="{ 'show active': index === 0 }"
                    :id="`v-pills-${item.fileName}`"
                    role="tabpanel"
                    :aria-labelledby="`v-pills-${item.fileName}-tab`"
                >
                    <tab-styles :parentId="item.fileName" :data="item.css.groups"></tab-styles>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import TabStyles from './TabStyles.vue';
import { mapGetters } from "vuex";

export default {
    components: {
        TabStyles,
    },
    computed: mapGetters(["cssFiles"]),    
}

</script>
  
<style scoped>

.tab-content {
    width: 100%;
    padding-top: 0;
}

</style>
  