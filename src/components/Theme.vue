<template>
    <div class="d-flex flex-column">
        <div class="row">
            <div class="col-12">
                <label for="tolerance-input">Допуск:</label>
                <input id="tolerance-input" class="form-control" type="number" step="0.01" v-model.number="tolerance" @input="onChangeTolerance" />
            </div>
        </div>
        <div class="row mt-3 flex-grow-1">
            <div class="col-6 d-flex flex-column h-100">
                <label for="colors-input">Основные цвета:</label>
                <textarea id="colors-input" v-model.trim="text" class="form-control flex-grow-1" rows="20"
                    @input="onChangeCss"></textarea>
            </div>

            <div class="col-6">
                <div v-for="(group, groupName) in theme.groups" :key="groupName">
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
                        <div v-else class="bg p-2 mb-1"
                            :style="{ backgroundColor: group.bg[0].value, color: onColor.value }">
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
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            text: `:root,
[data-theme=default] {
    --theme-blue--base-bg: #428BCA;
    --theme-blue--base-on: #FFFFFF;
    --theme-blue--base-on-dark: #585858;
    --theme-blue--base-border: #357ebd;
    --theme-blue--dark-bg: #1B6AAA;
    --theme-blue--dark-on: #FFFFFF;
    --theme-blue--alert-bg: #D9EDF7;
    --theme-blue--alert-on: #31708F;
    --theme-blue--alert-border: #bce8f1;

    --theme-green--base-bg: #87b87f;
    --theme-green--base-on: #FFFFFF;
    --theme-green--dark-bg: #629B58;
    --theme-green--dark-on: #FFFFFF;
    --theme-green--alert-bg: #DFF0D8;
    --theme-green--alert-on: #3C763D;
    --theme-green--alert-border: #D6E9C6;

    --theme-red--base-bg: #D15B47;
    --theme-red--base-on: #FFFFFF;
    --theme-red--dark-bg: #b74635;
    --theme-red--dark-on: #FFFFFF;
    --theme-red--alert-bg: #f2dede;
    --theme-red--alert-on: #a94442;
    --theme-red--alert-border: #ebccd1;

    --theme-orange--base-bg: #FFB752;
    --theme-orange--base-on: #FFFFFF;
    --theme-orange--dark-bg: #E59729;
    --theme-orange--dark-on: #FFFFFF;
    --theme-orange--alert-bg: #fcf8e3;
    --theme-orange--alert-on: #8a6d3b;
    --theme-orange--alert-border: #faebcc;

    --theme-purple--base-bg: #9585bf;
    --theme-purple--base-on: #FFFFFF;
    --theme-purple--dark-bg: #7461aa;
    --theme-purple--dark-on: #FFFFFF;

    --theme-pink--base-bg: #d6487e;
    --theme-pink--base-on: #FFFFFF;
    --theme-pink--dark-bg: #b73766;
    --theme-pink--dark-on: #FFFFFF;
}`,
            tolerance: 0
        }
    },
    computed: mapGetters(["theme"]),
    methods: {
        onChangeCss() {
            this.$store.dispatch("parseTheme", this.text);
        },
        onChangeTolerance() {
            this.$store.dispatch("setTolerance", this.tolerance);
        }
    },
    mounted() {
        this.tolerance = this.theme.tolerance;
    }
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