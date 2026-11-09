<template>
  <div>
    <ProductCard v-for="p in products" :key="p.id" :product="p" @add-to-cart="handleAddtoCart">
      <template #card-header>Product No. {{ p.id }}</template>
    </ProductCard>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
const products = ref([
  { id: 1, name: 'ProductA', price: 150, image: '/cat.jpg' },
  { id: 2, name: 'ProductB', price: 300, image: '/cat.jpg' },
  { id: 3, name: 'ProductC', price: 500, image: '/cat.jpg' },
])
const handleAddtoCart = (product) => {
  console.log('Add: ', product.name, product.price, ' Baht')
}
</script>
