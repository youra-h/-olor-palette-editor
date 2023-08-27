<template>
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-4 col-lg-2 d-md-block sidebar collapse vh-100">
                <div class="position-sticky pt-3">
                    <ul class="nav flex-column">
                        <!-- <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#theme" data-bs-toggle="tab"><i
                                    class="fas fa-palette pe-3"></i> Тема</a>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#css" data-bs-toggle="tab"><i
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
                    <!-- <div class="tab-pane fade show active" id="theme" role="tabpanel" aria-labelledby="theme-tab">
                        <div class="row">
                            <div class="col-6">
                                <label for="colors-input">Основные цвета:</label>
                                <textarea id="colors-input" class="form-control" rows="50" v-model="cssTheme"></textarea>
                            </div>
                        </div>
                    </div> -->
                    <!-- Css -->
                    <div class="tab-pane fade  show active" id="css" role="tabpanel" aria-labelledby="css-tab">
                        <div class="row">
                            <div class="col-12">
                                <add-css-file @loadFiles="loadFiles"></add-css-file>
                                <hr>
                                <view-css :files="files"></view-css>
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


import Css from './classes/css.js';
import Files from './classes/files.js';

import AddCssFile from './components/AddCssFile.vue';
import ViewCss from './components/ViewCss.vue';

export default {
    name: 'App',    
    components: {
        AddCssFile,
        ViewCss
    },
    data() {
        return {
            files: [],
            cssTheme: `:root, [data-theme=default] {
                --color-primary: #428bca;
                --color-primary-light: #5697d0;
                --color-primary-dark: #3071a9;
                --color-on-primary: #fff;
                --color-secondary: #f5f5f5;
                --color-secondary-light: white;
                --color-secondary-dark: gainsboro;
                --color-on-secondary: #585858;
                --color-tertiary: #9585bf;
                --color-tertiary-light: #a496c8;
                --color-tertiary-dark: #7864ad;
                --color-on-tertiary: #fff;
                --color-quaternary: #d6487e;
                --color-quaternary-light: #db5d8d;
                --color-quaternary-dark: #c02b64;
                --color-on-quaternary: #fff;
                --color-background: #fff;
                --color-background-light: white;
                --color-background-dark: #e6e6e6;
                --color-on-background: #333333;
                --color-success: #87b87f;
                --color-success-light: #96c18f;
                --color-success-dark: #68a65e;
                --color-on-success: #fff;
                --color-error: #d15b47;
                --color-error-light: #d66d5b;
                --color-error-dark: #b7422e;
                --color-on-error: #fff;
                --color-warning: #ffb752;
                --color-warning-light: #ffc26c;
                --color-warning-dark: #ffa21f;
                --color-on-warning: #fff;
            }`,
            resultMatch: [],
            result: '',
            tolerance: 0.05
        }
    },
    methods: {
        async loadFiles(files) {
            const temp = [];

            for (const file of files) {
                const text = await Files.getText(file);

                const item = {
                    fileName: file.name,
                    text,
                    css: new Css(text)
                }

                temp.push(item);
            }

            this.files = temp;
        },
        process() {
            this.cssText = `.label-pink.arrowed:before {
    border-right-color: #d6487e;
    -moz-border-right-colors: #d6487e;
}

.label-pink.arrowed-in:before {
    border-color: #d6487e;
    -moz-border-right-colors: #d6487e;
}`;

            const css = new Css(this.cssText);

            console.log(css);


            // const parseTheme = new ParseTheme(this.cssTheme);
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
