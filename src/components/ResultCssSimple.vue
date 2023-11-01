<template>
    <div style="height: 100%;">
        <textarea class="form-control h-100" rows="20">{{ data.getText() }}</textarea>
    </div>
</template>
  
<script>
export default {
    props: ['data'],
}

</script>
  
<style scoped>
.form-control {
    font-family: monospace;
    font-size: .9rem;
    width: 100%;
}
</style>
  