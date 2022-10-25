<template>
  <div>
    <h2>Vue Boodschappenopdracht</h2>
    <table id="groceryTable">
      <tr >
        <th style="padding-right:50px">Product</th>
        <th style="padding-right:50px">Prijs</th>
        <th style="padding-right:50px">Aantal</th>
        <th style="padding-right:50px">Subtotaal</th>
      </tr>
      <tr v-for="(product, index) in Producten" :key="index" >
        <td>{{product.name}}</td>
        <td >€{{product.price.toFixed(2)}}</td>
        <td style="text-align:left">
          <button @click="product.amount++" style="font-size:10px">+</button>
            {{product.amount}}
          <button @click="product.amount--" style="font-size:10px">-</button>
        </td>
        <td >€{{(product.price * product.amount).toFixed(2)}}</td>
        <td>
          <form @submit.prevent="delProduct(index);">
            <input type='submit' value='Delete product'>
          </form>
        </td>
        <td>             
            <button @click="Change(index)"> Change product</button>           
        </td>
      </tr>
      <tr>
        <td colspan="3">Totaal:</td>
        <td style="color:red">€ {{ totalPrice() }}</td>
      </tr>
    </table><br><br>
    <router-link :to="{path: '/AddProduct/'}">
      <button> Add product</button>           
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/stores/ProductStore';
import { useRouter, useRoute } from 'vue-router';

const productsData = ref(useProductStore());
const Producten = productsData.value.productsData
const router = useRouter()

const totalPrice = () => {
  return productsData.value.productsData.reduce((previousValue, currentValue) => previousValue + parseFloat(currentValue.amount*currentValue.price),0).toFixed(2);
}

const delProduct = (index) => {
  Producten.splice(index, 1);
}

const Change = (index) => {
 // console.log(Producten[index])
  router.push({path:'/ChangeProduct/'+index, props:Producten[index]})
}
</script>