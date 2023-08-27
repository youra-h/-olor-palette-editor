<template>
    <div>
        <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation" v-for="(item, index) in data" :key="index">
                <button
                    class="nav-link"
                    :class="{ active: index === 0 }"
                    :id="'tab-' + id(item.style, index)"
                    data-bs-toggle="tab"
                    :data-bs-target="'#tab-pane-' + id(item.style, index)"
                    type="button"
                    role="tab"
                    :aria-controls="'tab-pane-' + id(item.style, index)"
                    :aria-selected="index === 0"
                >
                    {{ item.style }}
                </button>
            </li>
        </ul>
        <div class="tab-content">
            <div
                class="tab-pane fade"
                :class="{ 'show active': index === 0 }"
                :id="'tab-pane-' + id(item.style, index)"
                role="tabpanel"
                :aria-labelledby="'tab-' + id(item.style, index)"
                tabindex="0"
                v-for="(item, index) in data"
                :key="index"
            >
                <accordion-css :index="index" :data="item"></accordion-css>
            </div>
        </div>
    </div>
</template>
  
<script>
import AccordionCss from './AccordionCss.vue';

export default {
    components: {
        AccordionCss,
    },
    props: {
        parentId: String,
        data: Object,
    },
    methods: {
        id(style, index) {
            return this.parentId + style;
        },
    }
};
</script>
  