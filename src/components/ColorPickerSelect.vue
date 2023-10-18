<template>
    <div class="wrapper-dropdown" v-click-outside="onClickOutside">
        <span @click="toggleDropdown()" v-html="selector"></span>
        <ul class="dropdown" v-show="active">
            <li v-if="emptyOption" @click="setColor();">
                <span class="noColor" v-if="emptyOption !== 'true'"><i class="fa fa-ban" aria-hidden="true"></i></span>
                {{ emptyOption === "true" ? "" : emptyOption }}
            </li>
            <li v-for="color in colors" @click="setColor(color)">
                <span :style="{ background: color.value }"></span> {{ color.name }}
            </li>
        </ul>
        <input type="hidden" :name="inputId" :id="inputId" v-model="_selected">
    </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'

export default {
    directives: {
        clickOutside: vClickOutside.directive
    },
    props: ['color-options', 'label', 'empty-option', 'input-id', 'selected'],
    data: function () {
        return {
            active: false,
            _selected: this.selected || '',
            colors: this.colorOptions,
            noSelection: true
        }
    },
    computed: {
        selector: function () {
            if (!this._selected && !this.emptyOption) {
                return this.label;
            }
            else if (!this._selected && this.emptyOption) {
                if (this.emptyOption === "true") {
                    return this.label;
                }
                else if (this.emptyOption !== "true" && this.noSelection === false) {
                    return '<span class="noColor"></span> ' + this.emptyOption;
                }
                else {
                    return this.label;
                }
            }
            else {
                return '<span class="color" style="background: ' + this._selected.value + '"></span> ' + this._selected.name;
            }
        }
    },
    methods: {
        setColor: function (color) {
            this._selected = color;
            this.active = false;
            this.noSelection = false;
            this.$emit('input', this._selected);
        },
        toggleDropdown: function () {
            this.active = !this.active;
        },
        onClickOutside() {
            this.active = false;
        }
    }
};
</script>

<style>
.wrapper-dropdown {
    position: relative;
    width: 250px;
    background: #FFF;
    color: #2e2e2e;
    outline: none;
    cursor: pointer;
    font-size: .9em;
}

.wrapper-dropdown>span {
    width: 100%;
    display: block;
    border: 1px solid #dee2e6;
    padding: 5px;
    border-radius: 5px;
}

.wrapper-dropdown .color {
    padding: 0 10px;
    margin-right: 5px;
    border-radius: 5px;
    border: 1px solid #dee2e6;
}

.wrapper-dropdown>span>span.noColor {
    background: #dee2e6;
    position: relative;
}

.wrapper-dropdown>span:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 16px;
    top: calc(50% + 4px);
    margin-top: -6px;
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: #4b4b4b transparent;
}

.wrapper-dropdown .dropdown {
    position: absolute;
    z-index: 10;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    font-weight: normal;
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    border: 1px solid #dee2e6;
    border-top: 0;
    border-radius: 0 0 5px 5px;
}

.wrapper-dropdown .dropdown li {
    display: block;
    text-decoration: none;
    color: #2e2e2e;
    padding: 5px;
    cursor: pointer;
    min-height: 28px;
}

.wrapper-dropdown .dropdown li>span {
    padding: 0 10px;
    margin-right: 5px;
    border-radius: 5px;
    border: 1px solid #dee2e6;
}

.wrapper-dropdown .dropdown li>span.noColor {
    background: #dee2e6;
    position: relative;
    padding: 0 3px;
}

.wrapper-dropdown .dropdown li>span.noColor .fa-ban {
    color: red;
}


.wrapper-dropdown .dropdown li:hover {
    background: #eee;
    cursor: pointer;
}
</style>