<template>
  <div>
    <div v-if="getPostList">
      <PostCard v-bind:data="getPostList.items" />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import allPost from '../apollo/queries/allPost.gql'

export default {
  apollo: {
    getPostList: {
      prefetch: true,
      query: allPost
    }
  }
}
</script>

<style></style>
