<template>
    <div>
        <label for="colors-input">Основные цвета:</label>

        <textarea id="colors-input" v-model.trim="text" class="form-control mb-2" rows="20" @input="onInput"></textarea>

        <div v-for="(group, groupName) in theme.groups" :key="groupName">
            <h3>{{ groupName }}: {{ group.bg[0].value }}</h3>

            <div v-for="(onColor, index) in group.on" :key="'on-' + index">
                <div class="bg p-2 mb-1" v-if="group.outline" v-for="(outlineColor, index) in group.outline" :key="'outline-' + index"
                    :style="{ backgroundColor: group.bg[0].value, color: onColor.value, borderColor: outlineColor.value, borderStyle: 'solid', borderWidth: '1px'}">
                    <div>Color: {{ onColor.value }}</div>
                    <div>Outline: {{ outlineColor.value }}</div>
                </div>
                <div v-else class="bg p-2 mb-1" :style="{ backgroundColor: group.bg[0].value, color: onColor.value }">
                    <div>Color: {{ onColor.value }}</div>
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
</style>