<template>
  <div class="body">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <div class="serviceBox">
                <span class="service-icon">
                </span>
            <div class="service-content">
              <h3 class="title">چگونه رزومه کاری بنویسیم؟</h3>
              <img id="img2" src="@/assets/image/oi.jpg" alt="">
              <router-link to="/Articles/one" class="read-more">ادامه مطلب</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <div class="serviceBox">
                <span class="service-icon">

                </span>
            <div class="service-content">
              <h3 class="title">۶ دلیل برای اینکه هنوز بی‌کار هستید؟</h3>
              <img id="img" src="@/assets/image/1_main.webp" alt="">
              <router-link to="/Articles/two" class="read-more">ادامه مطلب</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles-component"
}
</script>

<style scoped>
.body{
  margin: 10% 0;
}
.serviceBox{
  margin-top: 50px;
  border-bottom: 1px solid #c2c2c2;
  z-index: 1;
  position: relative;
  top: 0;
  transition: all 0.3s ease 0s;
}
.serviceBox:hover{
  top: -20px;
  border-bottom: 1px solid #FABA56;
}
.serviceBox:after{
  content: "";
  width: 2px;
  height: 100%;
  background: #c2c2c2;
  position: absolute;
  bottom: 0;
  right: 37.5px;
  z-index: -1;
  transition: all 0.3s ease 0s;
}
.serviceBox:hover:after{
  background: #FABA56;
}
.serviceBox .service-icon{
  display: inline-block;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: #fff;
  border: 5px solid #c2c2c2;
  text-align: center;
  line-height: 70px;
  float: right;
  font-size: 40px;
  color: #c2c2c2;
  z-index: 1;
  transition: all 0.3s ease 0s;
}
.serviceBox:hover .service-icon{
  border-color: #FABA56;
  color: #FABA56;
  margin-top: -30px;
  animation: bounce 1s ease normal none 1;
}
.serviceBox .service-content{
  margin-right: 90px;
  padding-bottom: 70px;
}
.serviceBox .title{
  font-size: 20px;
  color: #222;
  margin-top: 0;
}
.serviceBox .description{
  font-size: 16px;
  color: #444;
  line-height: 24px;
}
.serviceBox .read-more{
  display: inline-block;
  padding: 4px 16px;
  font-size: 13px;
  color: #FABA56;
  text-transform: capitalize;
  border: 2px solid #FABA56;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s ease 0s;
  text-decoration: none;
}
.serviceBox:hover .read-more{
  bottom: 25px;
  opacity: 1;
}
.serviceBox .read-more:hover{
  background: #FABA56;
  color: #fff;
}

@keyframes bounce{
  0%{ transform:scale(1.8) }
  50%{ transform:scale(0.95) }
  80%{ transform:scale(1.05) }
  90%{ transform:scale(0.98) }
  100%{ transform:scale(1) }
}
@media only screen and (max-width:990px){
  .serviceBox{ margin-bottom: 20px; }
}
@media only screen and (max-width:767px){
  .serviceBox{ margin-bottom: 70px; }
}

#img{
  width: 80%;
  height: auto;
  margin-top: 10px;
  opacity: 1;
  transition: all 0.3s ;
}
#img2{
  width: 75%;
  height: auto;
  margin-top: 10px;
  opacity: 1;
  transition: all 0.3s ;
}
.serviceBox:hover #img{
  opacity: 0.8;
  transition:  0.3s ;
}
.serviceBox:hover #img2{
  opacity: 0.7;
  transition:  0.3s ;
}
</style>