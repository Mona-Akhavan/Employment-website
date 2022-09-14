<template>
  <div>
    <Search/>
    <Categories/>
    <Advertising/>
    <Work/>
    <Articles/>
  </div>
</template>

<script>
import SearchComponent from "@/components/SiteContent/Search";
import CategoriesComponent from "@/components/SiteContent/Categories";
import AdvertisingComponent from "@/components/SiteContent/Advertising";
import WorkComponent from "@/components/SiteContent/Work";
import ArticlesComponent from "@/components/SiteContent/Articles"


export default {
  name: "Header-component",
  components: {
    Search:SearchComponent,
    Categories:CategoriesComponent,
    Advertising:AdvertisingComponent,
    Work:WorkComponent,
    Articles:ArticlesComponent,
  }
}
</script>

<style scoped>

</style>