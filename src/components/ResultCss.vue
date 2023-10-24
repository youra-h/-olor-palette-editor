<template>
    <div>
        <div class="d-flex align-items-start h-100">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button v-for="(item, index) in cssFiles" :key="index" class="nav-link" :class="{ active: index === 0 }"
                    :id="`v-pills-${item.fileName}-tab`" data-bs-toggle="pill" :data-bs-target="`#v-pills-${item.fileName}`"
                    type="button" role="tab" :aria-controls="`v-pills-${item.fileName}`" :aria-selected="index === 0">
                    {{ item.fileName }}
                </button>
            </div>
            <div class="tab-content h-100" id="v-pills-tabContent">
                <div v-for="(item, index) in cssFiles" :key="index" class="tab-pane fade h-100"
                    :class="{ 'show active': index === 0 }" :id="`v-pills-${item.fileName}`" role="tabpanel"
                    :aria-labelledby="`v-pills-${item.fileName}-tab`">
                    <textarea id="output" class="form-control h-100" rows="20">
                        {{ item.text.join('\n').trim() }}
                    </textarea>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from "vuex";

export default {
    computed: mapGetters(["cssFiles"]),
}

</script>
  
<style scoped>
.tab-content {
    width: 100%;
    padding: 0;
}

.form-control {
    font-family: monospace;
    font-size: .9rem;
    width: 100%;
}
</style>
  