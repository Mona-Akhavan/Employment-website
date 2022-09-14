<template>
  <div class="background">
    <div class="container">
      <div class="row">
        <div class="col-md-6 image">
            <img id="img" src="@/assets/image/SY.png" alt="">
        </div>
        <div class="col-md-6 tetxt">
          <div id="title">
            <h4>چگونه استخدام موفق داشته باشیم؟</h4>
          </div>
          <div class="items" v-for="(item,index) in post" :key="index">
            <div class="title">
              <font-awesome-icon class="icon" :icon="['fas','check']"/>
              <h5>{{ item.title }}</h5>
            </div>
            <div class="explanation">
              <p>{{ item.explanation }}</p>
            </div>
          </div>
          <div class="row justify-content-center ">
            <div  id="btn">
              <button type="button" class="btn btn-secondary">
                <font-awesome-icon :icon="['fas','file']"/>
                <a href="https://cvbuilder.me/" target="_blank">
                  رزومه ساز
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: "Work-component",
  data:function (){
   return{
     post:[
       {
         title:'خودت رو بشناس',
         explanation:'با آزمون‌‌های شخصیت شناسی شغلی ، خود را بهتر بشناسید تا مناسب ترین شغل را انتخاب کنید.'
       },
       {
         title:'رزومه ی حرفه ای',
         explanation:'یک رزومه‌ ی استاندارد و کامل برای خودتان بسازید.'
       },
       {
         title:'آشنایی با شرکت ها',
         explanation:'سازمان‌ها و شرکت‌های معتبر ایرانی را بشناسید و با شرایط استخدام و موقعیت‌های شغلی آن‌ها آشنا شوید.'
       },
       {
         title:'ارسال رزومه',
         explanation:'از جدیدترین فرصت‌های شغلی و استخدام سازمان‌ها مطلع شوید و برای آن‌ها رزومه بفرستید.'
       },
     ]
   };
  }
}
</script>

<style scoped>

.background{
 background-color: #f8f8f8;
  margin-top: 5%;
}

#img{
  margin-top: 5%;
  width: 90%;
  height: auto;
}
.tetxt{
 /* padding-top: 6%;*/
  padding: 6% 30px  6% 60px;

}
#title{
margin-bottom: 6%;
}

.icon{
  display: inline-block;
  color: #333;
}
h5{
  display: inline-block;
  padding-right: 10px;
  color: #333;
}
.explanation{
  padding-right: 20px;
}
p{
  color: rgba(51,51,51,0.7);
  font-size: 15px;
  padding-bottom: 5px;
  text-align: justify;
}
.btn{
  border-radius: 8px!important;
  background-color: #0E5265;
  border:1px solid white;
  padding: 12px 25px;
  transition:all 0.3s;
}
.btn:hover{
  background-color: white;
  border:1px solid #0E5265;
  border-radius: 8px!important;
  color: #0E5265;
  transition: 0.3s;
}
a{
  text-decoration: none;
  color: white;
  transition:all 0.3s;
}
.btn:hover a{
  color: #0E5265;
  transition: 0.3s;
}
</style>