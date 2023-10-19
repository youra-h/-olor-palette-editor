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
                                Результат</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main class="col-md-8 ms-sm-auto col-lg-10 px-md-4">
                <div class="tab-content vh-100" id="myTabContent">
                    <!-- Theme -->
                    <div class="tab-pane fade show active h-100" id="theme" role="tabpanel" aria-labelledby="theme-tab">
                        <div class="row h-100">
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
                    <div class="tab-pane fade h-100" id="edit" role="tabpanel" aria-labelledby="edit-tab">
                        <div class="row h-100">
                            <textarea id="output" v-model.trim="text" class="form-control" rows="20">
                            </textarea>
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
            text: 'output'
        }
    },    
}
</script>

<style></style>
