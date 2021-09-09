<template>
  <div>
    <UnoptProducts />
    <SocialHead 
    title="Tom's test eComm site with Takeshape"
    description="This is a working template for a project with Jaden from Takeshape. It is set up with Nuxt, Takeshape, imgix, Tailwind, Stripe, Apollo, & Vercel.  More info to come.."
    image="https://tom.imgix.net/krennic_profile.png"
  />
  </div>
</template>

<script>
import allProduct from '../apollo/queries/allProduct.gql'

export default {
  apollo: {
    getProductList: {
      prefetch: true,
      query: allProduct
    }
  }
}
</script>

<style>

</style>
