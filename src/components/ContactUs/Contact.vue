<template>
  <div class="body">
<div class="background">
  <div class="container">
    <form class="form"  @submit.prevent="Contact">
      <h1 class="form-title">ارتباط باما</h1>
      <div class=" row">
        <div class="form-group col-md-6" >
          <input  type="text" name="name" id="name" placeholder="نام و نام خانوادگی" v-model="name">
        </div>
        <div class="form-group col-md-6">
          <input  type="email" name="email" id="email" placeholder="ایمیل" v-model="email">
        </div>
        <div class="form-group">
          <textarea name="message" id="message" placeholder="متن خود را وارد کنید"></textarea>
        </div>
        <div class="col-md-6">
          <button type="submit" class="btn">ارسال پیام</button>
        </div>

      </div>
    </form>
  </div>
</div>
  </div>
</template>

<script>
export default {
name: "Contact-component",
  data(){
    return{
      name:'',
      email:'',
    }
  },
  methods: {
    Contact(){
      this.$router.replace("/");
    },

  },
}
</script>

<style scoped>
.background{
  background-color: #f4f4f4;
  padding: 5% 0;
}
.container {
  max-width: 1200px;
  padding: 0 32px;
}
.row {
  row-gap: 24px;
  align-items: end;
}
.form{
  width: 100%;
  max-width: 80%;
  margin: 64px auto 0;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 24px 32px;
  border-radius: 8px;
}
.form-title {
  font-size: 28px;
  font-weight: 700;
  color: #fe9900;
  text-align: center;
  margin-bottom: 32px;
}
.form-group {
  margin-bottom: 24px;
}
input,textarea{
  display: inline-block;
  width: 100%;
  padding: 16px 8px;
  color: #000 !important;
  border: none;
  outline: none;
  font-family: IRANSans;
  font-size: 14px;
}
input {
  border-bottom: 1px solid #ddd;
}

textarea {
  border: 1px solid #ddd;
  height: 100px;
  resize: none;
  border-radius: 11px;
}
input:focus{
  border-color: #fe9900;
}
textarea:focus{
  border-color: #fe9900;
}
.btn {
  border-radius: 8px !important;
  background-color: #fe9900;
  border: 1px solid white;
  padding: 12px 35px;
  transition: all 0.3s;
  color: #fff;
  font-family: IRANSans;
  font-size: 14px;
}
.btn:hover {
  background-color: #fe9900;
  border: 1px solid #fe9900;
  color: #fff;
  transition: 0.3s;
}
@media (max-width: 767px){
 .form-group{
  margin-bottom: 0!important;
}
 .btn{
   margin-right: 5px;
   padding: 12px 60px;
 }
 .container{
   margin-bottom: 48%;
 }
 .body{
   margin-top: 5%;
 }
}
</style>