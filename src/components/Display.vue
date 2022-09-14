<template>
  <div class="container">
    <div class="row justify-content-center">
      <section v-if="searchResult.length > 0">
        <div
          class="col-md-12"
          v-for="(item, index) in searchResult"
          :key="index"
        >
          <BaseCard :item="item"></BaseCard>
        </div>
      </section>
      <div class="col-md-8 p-4 shadow rounded m-4" v-else>
        <p class="text-center m-0 text-danger">
          متاسفانه آگهی متناسب با فیلترهای شما یافت نشد
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
export default {
  name: "Display-component",
  computed: {
    searchResult() {
      return this.$store.getters.searchResult;
    },
  },
  mounted() {
    this.$store.dispatch("findAdvertise", {
      text: this.$route.query.text || null,
      loc: this.$route.query.loc,
      category: this.$route.query.category || null,
    });
  },
  components: { BaseCard },
};
</script>

<style scoped>
.container {
  margin-top: 10%;
  padding: 0 40px;
  margin-bottom: 22.5%;
}
</style>
