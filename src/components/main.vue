<template>
  <div>
    <Menu/>
    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>

    <Footer/>
  </div>
</template>

<script>
import MenuComponent from "@/components/main/Menu";

import FooterComponent from "@/components/main/Footer";


export default {
name: "main-component",
  components: {
    Menu: MenuComponent,
    Footer: FooterComponent,
}
}
</script>

<style scoped>
*{
  direction: rtl;
}
</style>