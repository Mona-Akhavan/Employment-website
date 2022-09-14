<template>
  <div class="footer">
     <div class="container-fluid">
       <div class="row">
         <div class="col-md-10">
           <div class="tozih">
             <div >
               <span id="title">کاریابی</span>
               <div id="tozih">
                 <p>با معتبرترین شرکت‌های کشور آشنا شوید و محل کار آینده خود را هوشمندانه انتخاب کنید.</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
name: "Footer-component"
}
</script>

<style scoped>
.footer{
  height: 60%;
  background-color: #326a7c;
  padding-top: 15px;
}
.container-fluid{
  max-width: 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding-right: 50px;
  box-sizing: border-box;
  position: relative;
}
#title{
  color: #FABA56;
}
span{
  font-size: 20px;
}
p{
  color: #eec37c;
  font-size: 15px;
  padding-bottom: 5px;
  padding-top: 5px;
}
</style>
