<template>
    <div>
        <label for="colors-input">Основные цвета:</label>

        <textarea id="colors-input" v-model.trim="text" class="form-control mb-2" rows="20" @input="onInput"></textarea>

        <div v-for="(group, groupName) in theme.groups" :key="groupName" class="col-3">
            <h3>{{ groupName }}: {{ group.bg[0].value }}</h3>

            <div v-for="(onColor, index) in group.on" :key="'on-' + index">
                <div class="bg p-2 mb-1" v-if="group.outline" v-for="(outlineColor, index) in group.outline"
                    :key="'outline-' + index"
                    :style="{ backgroundColor: group.bg[0].value, color: onColor.value, borderColor: outlineColor.value, borderStyle: 'solid', borderWidth: '1px' }">
                    <div class="color-text">
                        <span>Color: {{ onColor.value }}</span>
                        <span>
                            <i class="fa fa-check p-1"></i>
                            <i class="fa fa-times p-1"></i>
                            <i class="fa fa-bell p-1"></i>
                        </span>
                    </div>
                    <div class="outline">
                        <span>Outline: {{ outlineColor.value }}</span>
                        <span class="view" :style="{ backgroundColor: outlineColor.value }"></span>
                    </div>
                </div>
                <div v-else class="bg p-2 mb-1" :style="{ backgroundColor: group.bg[0].value, color: onColor.value }">
                    <div class="color-text">
                        <span>Color: {{ onColor.value }}</span>
                        <span>
                            <i class="fa fa-check p-1"></i>
                            <i class="fa fa-times p-1"></i>
                            <i class="fa fa-bell p-1"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            text: ''
        }
    },
    computed: mapGetters(["theme"]),
    methods: {
        onInput() {
            this.$store.dispatch("parseTheme", this.text);
        }
    },
};
</script>

<style scoped>
.form-control {
    font-family: monospace;
    font-size: .9rem;
    width: 100%;
}

.bg {
    font-family: monospace;
    font-size: .9rem;
    border-radius: 3px;
}

.color-text,
.outline {
    display: flex;
    justify-content: space-between;
}

.outline .view {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
</style>