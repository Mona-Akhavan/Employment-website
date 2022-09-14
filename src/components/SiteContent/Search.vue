<template>
  <div class="elementor-widget-container">
    <div class="intro-banner dark-overlay extra-white-space">
      <img class="img" src="@/assets/image/003.jpg" alt="" />
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-8" id="border-title">
            <div class="banner-headline-alt">
              <h2 id="title">کاریابی</h2>
              <p id="title2">شغل، اشتغال و فرصت های شغلی را بیابید.</p>
              <div class="row">
                <div class="intro-banner-search-form">
                  <div class="intro-search-field with-label">
                    <font-awesome-icon class="font" :icon="['fas', 'search']" />
                    <input
                      id="intro-keywords"
                      name="search_keywords"
                      type="text"
                      placeholder="عنوان شغلی،مهارت یا.."
                      class="ui-autocomplete-input"
                      autocomplete="off"
                      v-model="searchInputText"
                    />
                  </div>
                  <div class="intro-search-field2 with-autocomplete with-label">
                    <div class="input-with-icon location">
                      <font-awesome-icon
                        class="font"
                        id="font"
                        :icon="['fas', 'location']"
                      />
                      <select
                        class="countryselect"
                        id="search_location"
                        v-model="location"
                      >
                        <option class="option" value="-1">استان</option>
                        <option class="option" value="تهران">تهران</option>
                        <option class="option" value="اصفهان">اصفهان</option>
                        <option class="option" value="فارس">فارس</option>
                        <option class="option" value="قم">قم</option>
                      </select>
                    </div>
                  </div>
                  <div id="btn">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="setSearchText"
                    >
                      جستجو
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p
              v-if="errorMessage"
              class="text-danger mt-2"
              style="font-weight: 700"
            >
              {{ errorMessage }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search-component",
  data() {
    return {
      location: "-1",
      searchInputText: "",
      errorMessage: "",
    };
  },
  methods: {
    setSearchText() {
      // first we store data
      this.$store.commit("setSearch", {
        text: this.searchInputText,
        loc: this.location,
      });

      // then => programmatic route
      this.$router.push({
        path: "DisplaySearch",
        query: { text: this.searchInputText, loc: this.location },
      });
    },
  },
};
</script>

<style scoped>
.elementor-widget-container {
  padding-top: 82px !important;
}
.img {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  position: absolute;
}
.intro-banner.extra-white-space {
  border-radius: 8px;
  margin: 40px;
  box-shadow: 0 10px 30px #949393;
  height: 506px;
  position: relative;
}
.container {
  z-index: 100;
  position: relative;
}
#border-title {
  margin-top: 15%;
}
#title {
  text-align: right;
  padding-bottom: 5px;
  font-size: 30px;
  font-weight: 600;
  color: #ffffff;
}
#title2 {
  font-size: 14px;
  text-align: right;
  color: rgba(255, 255, 255, 0.7);
}
.intro-banner-search-form {
  display: flex;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.09);
  margin-top: 10px;
  background-color: white;
}
.intro-search-field {
  border-left: 1px solid #e4e4e4;
  align-items: center;
  display: flex;
  position: relative;
}
.intro-search-field2 {
  align-items: center;
  display: flex;
  position: relative;
}
.font {
  color: #585858;
}
#font {
  margin-right: 7px;
}
input {
  margin: 20px 15px;
  border: none;
  box-shadow: none;
  outline: none;
  font-family: IRANSans;
  font-size: 14px;
}
#search_location {
  margin: 20px 15px;
  border: none;
  box-shadow: none;
  outline: none;
  padding-left: 100px;
  color: #585858;
  font-family: IRANSans;
  font-size: 14px;
}
.option {
  border-radius: 10px;
}
#btn {
  align-items: center;
  display: flex;
  position: relative;
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
@media (max-width: 767px) {
  .col-md-7 {
    padding-right: 35px !important;
  }
  .intro-banner-search-form {
    display: inline-block !important;
    box-shadow: 0 0 0;
  }
  .intro-search-field {
    border-left: none;
  }
  .with-label {
    display: block;

    border-radius: 3px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.09);
  }
  #btn {
    margin-top: 10px;
  }
}
</style>
