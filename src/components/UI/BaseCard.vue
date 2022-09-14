<template>
  <div class="body">
  <div class="serviceBox">
    <div class="service-icon" :style="{ background: item.background }"></div>
    <div class="service-content">
      <div class="row">
        <div class="col-md-6">
          <h3>{{ item.title }}</h3>
          <div class="job-metas">
            <div class="category-job">
              <div class="job-category with-icon">
                <font-awesome-icon
                  class="font"
                  :icon="['fas', 'fa-building']"
                />
                <a href="" style="">{{ item.category }}</a>
              </div>
            </div>
            <div class="job-location">
              <font-awesome-icon class="font" :icon="['fas', 'map']" />
              <a href="">{{ item.city }}</a>
            </div>
            <div class="job-location">
              <font-awesome-icon class="font" :icon="['fas', 'handshake']" />
              <a href="">{{ item.type }}</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div id="btn">
            <button type="button" class="btn btn-secondary rezome">
              ارسال رزومه
            </button>
          </div>
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
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      isSaved: false,
    };
  },
};
</script>

<style scoped>
.serviceBox {
  border: 1px solid #ecedf2;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 30px;
}
.serviceBox:hover {
  box-shadow: 1px 1px 5px 1px #e0e0e2;
  transition: 0.5ms;
}
.service-icon {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  float: right;
}
.service-content {
  margin-right: 70px;
}
.service-content h3 {
  color: hsl(0, 0%, 20%);
  font-size: 18px;
  font-weight: 600;
  margin-top: 0;
}
.service-content p {
  color: hsl(0, 0%, 47%);
  line-height: 1.6em;
}
.job-metas {
  margin-top: 20px;
  color: #696969;
  font-size: 14px;
  display: grid;
}
.job-metas > div {
  margin-left: 15px;
  padding-bottom: 5px;
}
.job-category i {
  margin-left: 5px;
}
.job-metas i {
  font-size: 17px;
  line-height: 1;
  margin-right: 5px;
}

.job-metas a {
  color: #696969;
  margin-right: 5px;
}
.job-metas > div:last-child {
  margin-left: 15px;
}
.job-metas > div {
  display: inline-block;
}
.job-metas-bottom > div {
  display: inline-block;
  margin-left: 15px;
  margin-top: 12px;
}
.font {
  color: #868383;
}
h4 {
  font-size: 14px;
  color: #333333 !important;
  margin: 30px 0 20px 0;
}

a {
  text-decoration: none;
}
#btn {
  margin-top: 60px;
  text-align: left;
  margin-left: 5px;
}
.rezome {
  border-radius: 8px !important;
  background-color: #faba56;
  border: 1px solid white;
  padding: 8px 20px;
  transition: all 0.3s;
  font-family: IRANSans;
  font-size: 14px;
}
.rezome:hover {
  background-color: #faba56;
  border: 1px solid #faba56;
  border-radius: 8px !important;
  color: white;
  transition: 0.3s;

}
#neshan {
  text-align: left;
  margin-top: 5px;
  margin-left: 5px;
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
@media (max-width: 767px){
.body{
  margin-top: 20%;
}
}
</style>
