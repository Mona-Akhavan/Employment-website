<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import MainComponent from "@/components/main";
export default {
  name: 'App',
  components: {
    Main: MainComponent,
  }
}
</script>

<style>
@font-face {
  font-family: IRANSans;
  font-style: normal;
  src: url('./assets/fonts/eot/IRANSansWeb_Black.eot');
  src: url('./assets/fonts/eot/IRANSansWeb_Black.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/woff2/IRANSansWeb_Black.woff2') format('woff2');
}
h1,h2,h3,h4,h5,h6,p,span,a,li,input,button{
  font-family: IRANSans;
}
</style>
