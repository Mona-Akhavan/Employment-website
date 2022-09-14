<template>
  <div class="body">
    <div class="container">
      <div class="row">
        <div class="col-md-8"
             v-for="(item, index) in detail"
             :key="index.id">
          <div class="border sharh">
            <div class="row">
              <div class="col-md-6">
                <div id="title">{{ item.title}}</div>
              </div>
              <div class="col-md-6">
                <div id="neshan">
                  <button
                      type="button"
                      class="btn neshan"
                      @click="isSaved = !isSaved"
                      :class="{ saved: isSaved }"
                  >
                    <font-awesome-icon class="font-neshan" :icon="['fas', 'star']" />
                    نشان کردن
                  </button>
                </div>
              </div>
              <div id="b"></div>
              <h4>شرح موقعیت شغلی</h4>
              <div class="explanation matn">
                {{ item.explanation }}
              </div>
              <h4>معرفی شرکت</h4>
              <div class="introduction matn">
                {{ item.introduction }}
              </div>
              <h4>حقوق</h4>
              <div class="matn">
                {{ item.Money }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4" >
          <div class="border rezome">
            <div id="text">
              از اینجا شروع کنید
            </div>
            <div id="form">
              <form action="">
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
                            <font-awesome-icon class="font" :icon="['fas','envelope']"/>
                        </i>
                        </span>
                  <input class="input" type="email" placeholder="آدرس ایمیل" name="email" v-model="email">
                </div>
                <div class="input-container border">
                       <span class="span">
                        <i class="iconForm ">
                            <font-awesome-icon class="font" :icon="['fas','phone']"/>
                        </i>
                        </span>
                  <input class="input" type="tel" placeholder="شماره تماس" name="phone" v-model="phone">
                </div>
                <div class="input-container file">
                  <input class="inputfile" type="file" accept=".docx,.doc,.pdf,.md,.pptx,.ppt,.txt">
                  <div class="text-input">
                      انتخاب فایل رزومه
                    <span class="span">
                        <i class="iconfile ">
                            <font-awesome-icon class="font" :icon="['fas','file']"/>
                        </i>
                        </span>
                  </div>
                </div>
                <div id="btn">
                  <button type="button" class="btn btn-secondary subrezome">
                    ارسال رزومه
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail-component",
  props: ["item"],
  data: function (){
    return{
      isSaved: false,
      name:'',
      email:'',
      phone:'',
      detail:[
        {
          id:"1",
          title:"برنامه نویسی وب",
          explanation:" تسلط کامل به JavaScript ،ES5 ،ES6 -" +
              " آشنایی با کتابخانه های رایج React - " +
              "توانایی کار تیم",
          introduction:"شرکت دانش بنیان نوآوران پردازش گستر نصر با هدف تولید و توسعه نرم افزار در زمینه ی مدیریت موجودی و انبار فعالیت خود را آغاز نمود و با بیش از ۲۰ سال سابقه فعالیت در این حوزه، همواره در بهره گیری از آخرین و بروزترین تکنولوژی ها پیشگام بوده است. این شرکت با تکیه بر دانش تیم توسعه با مجموعه ای متشکل از برنامه نویسان باتجربه، جوان و ضمانت تیم کنترل کیفیت، موفق به تولید و توسعه نرم افزارهای تحت ویندوز، وب و موبایل با بالاترین کیفیت و سرعت شده است.",
          Money:"از 8,000,000 تومان ",
        },
       /* {
          id:"2",
          title:"حسابداری دفتر کل",
          explanation:" مسلط به نرم افزار سپیدار -" +
              " ترجیحا دارای سابقه کار در شرکت  های بازرگانی - " +
              "ساعت کاری: شنبه تا چهارشنبه 8:30 تا 16:30 پنج شنبه 8:30 تا 12:30",
          introduction:"تیم بزرگ ماهی خان با تجربه 30 سال فروش آبزیان دریایی در جنوب کشور وفروش و ارسال عمده به سراسر کشور،تلاش نموده است با ساختن تیمی قوی و بزرگ متشکل از افراد خبره در زمینه فروش اینترنتی و تسهیلات مربوط به آن و افراد با تجربه در زمینه فروش آبزیان دریایی ،زمینه ساز خدمت رسانی و ارائه با کیفیت ترین و متنوع ترین و تازه ترین آبزیان دریایی جنوب کشور و ارسال سریع و آسان آن به منازل شما باشد.",
          Money:"از 10,000,000 تومان ",
        },*/

      ]
    };
  },

}
</script>

<style scoped>
.body{
  margin-top: 10%;
  margin-bottom: 10%;
}
.sharh{
  padding: 30px 40px;
}
#title{
  font-size: 24px;
  color: #5f5a5a;
}
#b{
  border-top: 1px dashed #aea8a8;
  margin-top: 40px;
}
h4{
  margin-top: 20px;
  font-size: 16px;
  color: #555555;
}
.matn{
  font-size: 14px;
  color: #555555;
  text-align: justify;
}
#neshan {
  text-align: left;

}
.neshan {
  background-color: white;
  border: 1px solid #868383;
  color: #868383;
  font-family: IRANSans;
  font-size: 14px;
}
.neshan:hover {
  border: 1px solid #868383;
  color: #868383;
}
.font-neshan {
  color: #868383;
}

.neshan.saved {
  border: 1px solid #dfa64c;
  color: #dfa64c;
}
.neshan.saved:hover {
  color: #c49242;
}
.neshan.saved .font-neshan {
  color: #dfa64c;
}
#text{
  font-family: IRANSans;
  text-align: center;
  font-weight: 500;
  border-bottom: 1px solid #d0d0d0;
  background-color: #f9f9f9;
  padding: 13px 0;
}
#form{
  text-align: center;
}
form{
  margin: 20px;
}
.input-container{
  text-align: center;
  display: flex;
  width: 100%;
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
  width: 10%;
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
.file{
  font-family: IRANSans;
  font-size: 14px;
  outline: none;
  width: 100%;
  padding: 10px;
  border: 1px dashed #e5e5e5;
  resize: vertical;
  background-color: #fff;
  -webkit-border-radius: 3px 3px 3px 3px;
  border-radius: 8px;
  height: 40px;
  position: relative;
}
.inputfile{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.text-input{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 0 10px 20px;
  text-align: center;
  color: #626262;
  font-size: 12px;

}
.iconfile{
  margin-right: 5px;
}

.subrezome {
  margin-top: 10px;
  width: 100%;
  border-radius: 8px !important;
  background-color: #faba56;
  border: 1px solid white;
  padding: 12px 20px;
  transition: all 0.3s;
  font-family: IRANSans;
  font-size: 14px;
}
.subrezome:hover {
  background-color: #faba56;
  border: 1px solid #faba56;
  border-radius: 8px !important;
  color: white;
  transition: 0.3s;
}
@media (max-width: 767px){
  .body{
    margin-top: 25%;
    margin-bottom: 60%;
  }
}
</style>