<template>
  <div>
    <div v-if="getProductList">
      <UnoptProductCard v-bind:data="getProductList.items" />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import allProduct from '../apollo/queries/allProduct.gql'

export default {
  props: ['data'],
  apollo: {
    getProductList: {
      prefetch: true,
      query: allProduct
    }
  }
}
</script>

<style></style>
