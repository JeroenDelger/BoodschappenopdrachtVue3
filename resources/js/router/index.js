import App from '../components/home.vue'
import AddProduct from '../components/addproduct.vue'
import ChangeProduct from '../components/changeproduct.vue'
import ProductPage from '../components/formpage.vue'
import { ref } from 'vue';
import { useProductStore } from '@/stores/ProductStore';
   
export const routes = [
  {
    path: '/Boodschappenlijst',
    alias: '/',
    name: 'Boodschappen Lijst',
    component: App
  },

  {
    path: '/Addproduct',
    name: 'Add Product',
    component: ProductPage,
  },
  
  {
    path: '/ChangeProduct/:id',
    name: 'Change Product',
    component: ProductPage,
  },
]