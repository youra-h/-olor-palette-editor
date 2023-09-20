<template>
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-4 col-lg-2 d-md-block sidebar collapse vh-100">
                <div class="position-sticky pt-3">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#theme" data-bs-toggle="tab"><i
                                    class="fas fa-palette pe-3"></i> Тема</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#css" data-bs-toggle="tab"><i
                                    class="fas fa-palette pe-3"></i> Css</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#edit" data-bs-toggle="tab"><i class="far fa-edit pe-3"></i>
                                Редактирование</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main class="col-md-8 ms-sm-auto col-lg-10 px-md-4">
                <div class="tab-content" id="myTabContent">
                    <!-- Theme -->
                    <div class="tab-pane fade show active" id="theme" role="tabpanel" aria-labelledby="theme-tab">
                        <div class="row">
                            <theme></theme>
                        </div>
                    </div>
                    <!-- Css -->
                    <div class="tab-pane fade" id="css" role="tabpanel" aria-labelledby="css-tab">
                        <div class="row">
                            <div class="col-12">
                                <add-css-file></add-css-file>
                                <hr>
                                <view-css></view-css>
                            </div>
                        </div>
                    </div>
                    <!-- Edit -->
                    <div class="tab-pane fade" id="edit" role="tabpanel" aria-labelledby="edit-tab">
                        <div class="row">
                            <div class="col-12">
                                <label for="tolerance-input">Допуск:</label>
                                <input id="tolerance-input" class="form-control" type="number" step="0.01"
                                    v-model.number="tolerance" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button class="btn btn-primary mt-3" @click="process">Обработать</button>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-12">
                                <label>Соотвествия:</label>
                                <div id="result-match">
                                    <div v-for="(log, index) in resultMatch" :key="index">
                                        <div class="row selector">
                                            <div class="col-1 line-number">{{ log.selector.line }}:</div>
                                            <div class="col-11 content">{{ log.selector.text }}</div>
                                        </div>
                                        <div v-for="(prop, propIndex) in log.props" :key="propIndex">
                                            <div class="row prop">
                                                <div class="col-1 line-number">{{ prop.line }}:</div>
                                                <div class="col-1"><span
                                                        :class="{ 'success': prop.match, 'error': !prop.match }"></span>
                                                </div>
                                                <div class="col-10 content">

                                                    <!-- <span>{{ prop.name }}</span> -->
                                                    <span class="color-box" :style="{ backgroundColor: prop.value }"></span>
                                                    <span v-if="prop.match"> - </span>
                                                    <span v-if="prop.match" class="color-box"
                                                        :style="{ backgroundColor: prop.match.value }"></span>
                                                    {{ prop.match ? prop.match.key : '' }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>

import AddCssFile from './components/AddCssFile.vue';
import ViewCss from './components/ViewCss.vue';
import Theme from './components/Theme.vue';
import ParseTheme from './classes/parse-theme';

export default {
    name: 'App',
    components: {
        AddCssFile,
        ViewCss,
        Theme
    },
    mounted() {
        this.$store.dispatch("fetchSearchFiles");
    },
    data() {
        return {
            cssTheme: `:root,
[data-theme=default] {
    --theme-primary--bg: #428BCA;
    --theme-primary--on: #FFFFFF;
    --theme-primary--on-light: #585858;
    --theme-primary--outline: #357ebd;
    --theme-success--bg: #87b87f;
    --theme-success--on: #FFFFFF;
}`,
            resultMatch: [],
            result: '',
            tolerance: 0.05
        }
    },
    methods: {
        process() {
            // this.cssText = `.label-pink.arrowed:before {
            //     border-right-color: #d6487e;
            //     -moz-border-right-colors: #d6487e;
            // }

            // .label-pink.arrowed-in:before {
            //     border-color: #d6487e;
            //     -moz-border-right-colors: #d6487e;
            // }`;

            // const css = new Css(this.cssText);

            // console.log(css);


            const parseTheme = new ParseTheme(this.cssTheme);
            console.log(parseTheme);
            // parseTheme.tolerance = this.tolerance;

            // for (let i = 0; i < parsedCss.length; i++) {
            //     const props = parsedCss[i].props;

            //     for (let j = 0; j < props.length; j++) {
            //         const color = props[j].value;

            //         const match = parseTheme.findColor(color);

            //         if (match) {
            //             props[j].match = match;
            //         }



            //         // for (let key in parseTheme) {
            //         //     if (compareColors(colorValue, parseTheme[key], tolerance)) {
            //         //         found = true;
            //         //         props[j].matchedColor = key;
            //         //         this.resultMatch.push({
            //         //             selector,
            //         //             prop: props[j],
            //         //             mainColor: { key: key, value: parseTheme[key] },
            //         //             result: 'found'
            //         //         });
            //         //         break;
            //         //     }
            //         // }

            //         // if (!found) {
            //         //     this.resultMatch.push({
            //         //         selector: selector,
            //         //         prop: props[j],
            //         //         result: 'not found'
            //         //     });
            //         // }
            //     }
            // }

            // console.log(parsedCss);

            // this.resultMatch = parsedCss;
        },
        // watch: {
        //     files(value) {
        //         console.log(Array.from(value));
        //     }
        // }
    },
}
</script>

<style></style>
