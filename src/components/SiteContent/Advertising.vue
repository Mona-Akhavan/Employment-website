<template>
  <div class="container">
    <div class="container pt-0 pb-5">
      <div class="row justify-content-center text-center">
        <div class="col-lg-6 section-heading aos-init aos-animate">
          <h3 class="text-center box" id="tbox">آگهی مشاغل</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-4 col-sm-6"
        v-for="(item, index) in advertis"
        :key="index"
      >
        <div class="serviceBox">
          <router-link :to="{ name: 'detail', params: { detailId: index.id }}">
          <div
            class="service-icon"
            :style="{ background: item.background }"
          ></div>
          <div class="service-content">
            <h3>{{ item.title }}</h3>
            <div class="job-metas">
              <div class="category-job">
                <div class="job-category with-icon">
                  <font-awesome-icon
                    class="font"
                    :icon="['fas', 'briefcase']"
                  />
                  <a href="" style="">{{ item.category }}</a>
                </div>
              </div>
              <div class="job-location">
                <font-awesome-icon class="font" :icon="['fas', 'map']" />
                <a href="">{{ item.city }}</a>
              </div>
            </div>
          </div>
          <div class="job-metas-bottom">
            <div class="job-type with-title">
              <a class="type-job" href="" style="">{{ item.type }}</a>
            </div>
            <span class="urgent">{{ item.urgent }}</span>
          </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row justify-content-center text-center">
      <div id="btn">
        <button type="button" class="btn btn-secondary">
          <font-awesome-icon :icon="['fas', 'plus']" />
          مشاغل بیشتر
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advertising-component",
  computed: {
    advertis() {
      return this.$store.getters.advertise;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 5%;
}
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
  color: #696969;
  font-size: 14px;
}
.job-metas > div {
  display: inline-block;
  margin-left: 15px;
}
.job-category i {
  margin-left: 5px;
}
.job-metas i {
  display: inline-block;
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
.type-job {
  display: inline-block;
  color: #1967d2;
  background: #dde8f8;
  border-radius: 50px;
  padding: 1px 20px;
  font-size: 13px;
}
.urgent {
  display: inline-block;
  color: #f9ab00;
  background: rgba(249, 171, 0, 0.15);
  border-radius: 50px;
  padding: 1px 20px;
  font-size: 13px;
}
a {
  text-decoration: none;
}
#btn {
  margin-top: 15px;
}
.btn {
  border-radius: 8px !important;
  background-color: #0e5265;
  border: 1px solid white;
  padding: 12px 35px;
  transition: all 0.3s;
  font-family: IRANSans;
  font-size: 14px;
}
.btn:hover {
  background-color: white;
  border: 1px solid #0e5265;
  border-radius: 8px !important;
  color: #0e5265;
  transition: 0.3s;
}
</style>
