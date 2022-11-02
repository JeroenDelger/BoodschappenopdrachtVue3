<template>
    <div>
        <formtemplate></formtemplate>
        {{ test() }}
    </div>
</template>

<script setup>
// TODO: formpage hernoemen naar: "ProductForm" en deze in een aparte sub-map "forms" plaatsen voor betere projectstructuur
import formtemplate from "./formpage.vue";

// TODO: ongebruikte functies verwijderen
const test = () => {
    console.log(formtemplate);
};
</script>
