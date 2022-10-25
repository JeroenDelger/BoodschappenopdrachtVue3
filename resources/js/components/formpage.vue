<template>
  <div>
    <h2 v-if="productId >= 0">{{product.name}} Bewerken</h2>
    <h2 v-else>Nieuw product toevoegen</h2>
      Product: <input v-model='product.name' type="text" id="type"><br>
      Prijs: <input v-model='product.price'  type="number" id="price" step='0.01'><br>
      Aantal: <input v-model='product.amount'  type="number" id="amount"><br>
      <input type='submit' @click="button(product)">
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/stores/ProductStore';
import { useRouter, useRoute } from 'vue-router';

const productsData = ref(useProductStore());
const producten = productsData.value.productsData
const router = useRouter();
const route = useRoute();
var productId = route.params.id;
var product = {}

const button = (product) => {
  if(productId == undefined){
    producten.push(product);
  }
  router.push('/');
}

if(productId >= 0){
  product = producten[productId];
}

else {
  product.name = null,
  product.price = null,
  product.amount = null
};

</script>