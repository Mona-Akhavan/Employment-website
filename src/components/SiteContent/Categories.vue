<template>
  <div class="container">
    <div class="container pt-0 pb-5">
      <div class="row justify-content-center text-center">
        <div class="col-lg-6">
          <h3 class="text-center box" id="tbox">دسته بندی های شغلی</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-3 col-sm-12"
        v-for="(item, index) in category"
        :key="index"
      >
        <div class="border" @click="displayPage(item.title)">
          <div class="category-icon text-center icon">
            <img class="img" v-bind:src="item.img" alt="" />
          </div>
          <div class="text-center text">
            <h6>{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories-component",
  data: function () {
    return {
      category: [
        {
          title: "حسابداری و مالی",
          img: require("@/assets/icon/accounts.png"),
        },
        {
          title: "برنامه نویسی و نرم افزار",
          img: require("@/assets/icon/programmer.png"),
        },
        {
          title: "فروش و بازاریابی",
          img: require("@/assets/icon/acquisition.png"),
        },
        {
          title: "مهندسی",
          img: require("@/assets/icon/engineering.png"),
        },
        {
          title: "بهداشت و درمان",
          img: require("@/assets/icon/medical-team.png"),
        },
        {
          title: "حمل و نقل",
          img: require("@/assets/icon/transportation.png"),
        },
        {
          title: "طراح و گرافیست",
          img: require("@/assets/icon/designer.png"),
        },
        {
          title: "مترجم",
          img: require("@/assets/icon/translator.png"),
        },
      ],
    };
  },
  methods: {
    displayPage(category) {
      this.$router.push({
        path: "DisplaySearch",
        query: { category },
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 5%;
}
.border {
  display: block;
  border-radius: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  margin-bottom: 30px;
  padding: 35px 35px;
}
.border:hover {
  box-shadow: 1px 1px 5px 1px #e0e0e2;
  transition: 0.5ms;
}
.icon {
  background-color: #ecedf2;
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  transition: all 0.5ms;
}
.border:hover .icon {
  background-color: #f8f8f8;
  transition: 5ms;
}
.img {
  width: 50px;
  transition: all 0.5ms;
}
.border:hover .img {
  width: 55px;
  transition: 5ms;
}
.text {
  color: #585858;
  transition: all 5ms;
}
.border:hover .text {
  color: #326a7c;
  transition: 5ms;
}
</style>
