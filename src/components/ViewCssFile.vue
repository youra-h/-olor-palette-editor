<template>
    <div>
        <div class="d-flex align-items-start mt-3">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button
                v-for="(file, index) in files"
                :key="index"
                class="nav-link"
                :class="{ active: index === 0 }"
                :id="`v-pills-${file.fileName}-tab`"
                data-bs-toggle="pill"
                :data-bs-target="`#v-pills-${file.fileName}`"
                type="button"
                role="tab"
                :aria-controls="`v-pills-${file.fileName}`"
                :aria-selected="index === 0"
            >
                {{ file.fileName }}
            </button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
            <div
                v-for="(file, index) in files"
                :key="index"
                class="tab-pane fade"
                :class="{ 'show active': index === 0 }"
                :id="`v-pills-${file.fileName}`"
                role="tabpanel"
                :aria-labelledby="`v-pills-${file.fileName}-tab`"
            >
                <div class="accordion" id="'accordion-' + index">
                        <div class="accordion-item" v-for="(color, colorIndex) in file.css.groupColors" :key="colorIndex">
                            <h2 class="accordion-header" :id="'heading-' + index + '-' + colorIndex">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="'#collapse-' + index + '-' + colorIndex" aria-expanded="false"
                                    :aria-controls="'collapse-' + index + '-' + colorIndex"
                                    :style="{ backgroundColor: color.color }"
                                    >                                    
                                    <span class="color-hex">{{ color.color }}</span>
                                    <span class="color-len">{{ color.link.length }}</span>                                    
                                </button>
                            </h2>
                            <div :id="'collapse-' + index + '-' + colorIndex" class="accordion-collapse collapse"
                                :aria-labelledby="'heading-' + index + '-' + colorIndex" :data-bs-parent="'#accordion-' + index">
                                <div class="accordion-body">
                                    <div v-for="(link, linkIndex) in color.link" :key="index * 1000 + linkIndex">
                                        <div class="names-block mb-3 p-2 bg-light rounded-3"
                                            @click="link.showStyles = !link.showStyles">
                                            <p v-for="(name, nameIndex) in link.names" :key="index * 1000 + linkIndex * 1000 + nameIndex"
                                                class="mb-0 text-muted small">{{ name }}</p>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="link.showStyles" class="styles-block mb-3 p-2 bg-light rounded-3">
                                            <p class="selector-style" v-for="(style, styleIndex) in link.styles" :key="index * 1000 + linkIndex * 1000 + styleIndex">{{ style.name }}: {{ style.value }}</p>
                                            </div>
                                        </transition>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        files: {}
    },
    data() {
        return {
            showStyles: []
        }
    },
    methods: {
        toggleStyles(index) {
            this.$set(this.showStyles, index, !this.showStyles[index])
        }
    }
}

</script>
  
<style scoped>

.tab-content {
    width: 100%;
    padding-top: 0;
}

.accordion {
    --bs-accordion-btn-padding-y: 5px;
}

.accordion-body {
    padding-bottom: 0;
}

.accordion-item {
    border: none;
}
.color-circle {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    /* border-radius: 50%; */
}

.color-hex {
    color: #fff;
    font-size: 0.9rem;  
    text-shadow: 1px 1px 2px black;  
}

.color-len {
    margin-left: 1rem;
    color: rgb(139, 1, 1);
    text-shadow: 1px 1px 2px black;
    font-size: 0.9rem;
}

.styles-block {
    margin-top: -10px;
}

.selector-style {
    font-size: 0.8rem;
    color: #777;
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
  