<template>
  <div>
    <div class="col-md-7 col-sm-12">
      <form action="">
        <div class="form text-center">
          <div class="container cf " id="form">
            <h5 class="title-login">ثبت نام کاربر جدید</h5>
            <div class="input-container border">
                       <span class="span">
                        <i class="iconForm ">
                            <font-awesome-icon class="font" :icon="['fas','user']"/>
                        </i>
                        </span>
              <input class="input" type="text" placeholder="نام و نام خانوادگی" name="user" v-model="name">
            </div>
            <div class="input-container border">
                       <span class="span">
                        <i class="iconForm ">
                            <font-awesome-icon class="font" :icon="['fas','location']"/>
                        </i>
                        </span>
              <input class="input" type="text" placeholder="محل سکونت" name="location" v-model="address">
            </div>
            <div class="input-container border">
                       <span class="span">
                        <i class="iconForm ">
                            <font-awesome-icon class="font" :icon="['fas','envelope']"/>
                        </i>
                        </span>
              <input class="input" type="email" placeholder="آدرس ایمیل" name="email" v-model="email">
            </div>
            <div class="input-container border">
                        <span class="span">
                        <i class="iconForm ">
                           <font-awesome-icon class="font" :icon="['fas','lock']"/>
                        </i>
                        </span>
              <input class="input" type="password" placeholder="کلمه عبور" name="password" v-model="password">
            </div>
            <div class="input-container border">
                        <span class="span">
                        <i class="iconForm ">
                           <font-awesome-icon class="font" :icon="['fas','lock']"/>
                        </i>
                        </span>
              <input class="input" type="password" placeholder="تکرار کلمه عبور" name="password_confirmation" >
            </div>
            <button class="btn" type="submit" @click.prevent="RegisterUser()">ثبت نام</button>
          </div>
        </div>
      </form>
    </div>
    <div class="container body"></div>
  </div>
</template>

<script>
export default {
  name: "Register-component",
  data(){
    return{
      name:'',
      address:'',
      email:'',
      password:''
    }
  },
  methods: {
    RegisterUser() {
      const register={
        name:this.name,
        address:this.address,
        email:this.email,
        password:this.password
      };
      this.$router.dispatch("RegisterUser",register);
    },
  },
}
</script>

<style scoped>
.body{
  border-bottom: 1px solid #5396a7;
  margin-top: 3%;
  width: 70%;
  margin-bottom: 3%;
}
#form{
  font-size: 90%;
  margin-right: 20%;
  margin-top: 10%;
}
.cf{
  position: relative;
  width: 80%;
  padding-top: 40px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}
.title-login{
  text-align: right;
  color:#585858;
  margin-bottom: 25px;
}
.input-container{
  display: flex;
  width: 80%;
  margin-bottom: 20px;
  border-radius: 8px;
}
.input-container i{
  position: absolute;

}
.iconForm {
  padding: 10px;
  min-width: 40px;
  text-align: center;
  color:#585858;
}
.span{
  width: 9%;
  text-align: right;
}
.input {
  border: none;
  width: 80%;
  padding: 10px;
  outline: none;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
}
.btn{
  width: 80%;
  color: white;
  padding: 15px 20px;
  margin-left: 20%;
  cursor: pointer;
  border-radius: 8px!important;
  background-color: #5396a7;
  border:1px solid white;
  transition:all 0.3s;
  font-family: IRANSans;
  font-size: 14px;

}

.btn:hover{
  background-color: #0E5265;
  border-radius: 8px!important;
  transition: 0.3s;
  color: white;
}

@media (max-width: 767px){
  #form{
    margin-right: 10%!important;
    margin-top: 20%;
  }
  .input-container{
    width: 80%!important;
  }
  .input {
    width: 70%!important;
    padding: 10px;
  }
  .body{
    margin-top: 5%!important;
    margin-bottom: 45%;
  }

  }
</style>