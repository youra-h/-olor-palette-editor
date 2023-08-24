<template>
    <div>
        <h2 class="accordion-header" :id="'heading-' + parentId">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#collapse-' + parentId" aria-expanded="false"
                :aria-controls="'collapse-' + parentId" :style="{ backgroundColor: color.color }">
                <span class="color-hex">{{ color.color }}</span>
                <span class="color-len">{{ color.items.length }}</span>
            </button>
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        parentId: String,
        color: Object,
    },
};
</script>

<style scoped>
.color-hex {
    color: #fff;
    font-size: 0.9rem;  
    text-shadow: 1px 1px 2px black;  
}

.color-len {
    margin-left: 1rem;
    color: rgb(139, 1, 1);
    text-shadow: 1px 1px 2px black;
    font-size: 0.9rem;
}
</style>