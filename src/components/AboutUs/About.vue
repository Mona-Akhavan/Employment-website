<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="content">
          <h3>درباره ما</h3>
          <p>پیدا کردن شغل دلخواه و فرصت استخدام با شرایط مطلوب،کاری آسان نیست. فرآیند پیدا کردن شغل و کاریابی ، همواره مسیری با ناهمواری های زیاد برای کارجویان بوده است.
            همه کارجویان در هر حوزه، شهر، شغل و سنی تمایل به کوتاه و آسان‌تر کردن این مسیر ناهموار و تسریع در استخدام خود دارند. برای موفقیت در این راه به یک رزومه حرفه ای، دسترسی به آگهی های استخدام جدید ، شناخت سازمان ها ، مهارت تخصصی و در نهایت ارسال رزومه به فرصت های شغلی متناسب با خود نیاز دارند.ما در این راه با شما همراه هستیم.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="image">
          <img src="@/assets/image/Job.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "About-component"
}
</script>

<style scoped>
.container{
  margin-top: 10%;
  margin-bottom: 5%;
}
.content{
  margin-top: 30%;
}
h3{
  margin-bottom: 20px;
  color: #fe9900;
}
p{
  color: #585858;
  font-size: 14px;
  text-align: justify;
}
img{
  width: 100%;
}
@media (max-width: 767px){
  .container{
    margin-bottom: 15%;
    padding: 0 30px;
  }
}
</style>