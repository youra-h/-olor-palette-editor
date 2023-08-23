<template>
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      numbers: Array
    }
  }
  </script>
  