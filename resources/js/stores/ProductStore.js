import { defineStore } from "pinia";
import productsData from "@/data/products.json";


export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      productsData,            
    };
  },
  getters:{
    getAllFromState(state){
      return state
    }
  }
})
export default useProductStore