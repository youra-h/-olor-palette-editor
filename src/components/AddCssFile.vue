<template>
    <div>
        <div v-for="(file, index) in cssFiles" :key="file.name" class="d-flex align-items-center">
            <button @click="removeFile(file)" type="button" class="btn-close me-2" aria-label="Close"></button>
            <span class="text-muted" style="font-size: 0.8rem;">{{ file.name }}</span>
        </div>
        <button @click="addFile" class="btn btn-primary mt-2">Добавить файл CSS</button>
    </div>
</template>
  
<script>
import { mapGetters } from "vuex";

export default {
    computed: mapGetters(["cssFiles"]),
    methods: {
        addFile() {
            let fileInput = document.createElement("input");

            fileInput.type = "file";
            fileInput.accept = ".css";

            fileInput.onchange = () => {
                const file = fileInput.files[0];

                this.$store.dispatch("addCssFile", file);
            };

            fileInput.click();
        },
        removeFile(file) {
            this.$store.dispatch("removeCssFile", file);
        }
    }
};
</script>
  