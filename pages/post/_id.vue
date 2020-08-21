<template>
  <div>
    <div v-if="getPost">
      <h1>{{ getPost.title }}</h1>
      <p>{{ getPost.deck }}</p>

      <NuxtLink :to="`/`">
        <button>Back Home</button>
      </NuxtLink>
    </div>

    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import post from '../../apollo/queries/post.gql'
export default {
  apollo: {
    getPost: {
      query: post,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  },
  methods: {}
}
</script>

<style></style>
