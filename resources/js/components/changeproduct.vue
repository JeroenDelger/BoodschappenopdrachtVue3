<template>
  <div>
    <formtemplate></formtemplate> 
    {{test()}}
  </div>
</template>

<script setup>
  import formtemplate from './formpage.vue'

  const test = () => {
    console.log(formtemplate)
  }
</script>