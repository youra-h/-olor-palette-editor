<template>
    <div>
        <div v-for="(file, index) in files" :key="file.name" class="d-flex align-items-center">
            <button @click="removeFile(index)" type="button" class="btn-close me-2" aria-label="Close"></button>
            <span class="text-muted" style="font-size: 0.8rem;">{{ file.name }}</span>
        </div>
        <button @click="addFile" class="btn btn-primary mt-2">Добавить файл CSS</button>
    </div>
</template>
  
<script>
export default {    
    data() {
        return {
            files: []
        };
    },
    methods: {
        addFile() {
            let fileInput = document.createElement("input");

            fileInput.type = "file";
            fileInput.accept = ".css";

            fileInput.onchange = () => {
                const file = fileInput.files[0];

                this.files.push(file);

                this.$emit("loadFiles", this.files);
            };

            fileInput.click();
        },
        removeFile(index) {
            this.files.splice(index, 1);
            this.$emit("loadFiles", this.files);
        }
    }
};
</script>
  