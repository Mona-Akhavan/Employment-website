import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchedText: "",
    searchedLoc: "",
    searchResult: [],
    advertise: [
      {
        background: "#941583",
        title: "برنامه نویسی وب",
        category: "برنامه نویسی و نرم افزار",
        city: "تهران",
        type: "تمام وقت",
        urgent: "فوری",
        id:"1"
      },
      {
        background: "#20bc6a",
        title: "حسابدار دفتر کل",
        category: "حسابداری و مالی",
        city: "اصفهان",
        type: "تمام وقت",
        urgent: "فوری",
        id:"2"
      },
      {
        background: "#52a2cd",
        title: "پرستار(خانم)",
        category: "بهداشت و درمان",
        city: "اصفهان",
        type: "پاره وقت",
        urgent: "فوری",
        id:"3"
      },
      {
        background: "#d43d21",
        title: "تحصیلدار(آقا)",
        category: "حمل و نقل",
        city: "تهران",
        type: "تمام وقت",
        urgent: "فوری",
        id:"4"
      },
      {
        background: "#ff3366",
        title: "گرافیست",
        category: "طراح و گرافیست",
        city: "اصفهان",
        type: "پاره وقت",
        urgent: "فوری",
        id:"5"
      },
      {
        background: "#e5db28",
        title: "مهندس برق الکترونیک",
        category: "مهندسی",
        city: "تهران",
        type: "تمام وقت",
        urgent: "فوری",
        id:"6"
      },
      {
        background: "#e21727",
        title: "ویزیتور فروش (دورکاری)",
        category: "فروش و بازاریابی",
        city: "تهران",
        type: "تمام وقت",
        urgent: "فوری",
        id:"7"
      },
      {
        background: "#9fbf13",
        title: "مترجم زبان انگلیسی(خانم)",
        category: "مترجم",
        city: "قم",
        type: "پاره وقت",
        urgent: "فوری",
        id:"8"
      },
      {
        background: "#20bc6a",
        title: "حسابدار مالیاتی",
        category: "حسابداری و مالی",
        city: "تهران",
        type: "تمام وقت",
        urgent: "فوری",
        id:"9"
      },
      {
        background: "#941583",
        title: "برنامه نویس(PHP)",
        category: "برنامه نویسی و نرم افزار",
        city: "تهران",
        type: "پاره وقت",
        urgent: "فوری",
        id:"10"
      },
      {
        background: "#52a2cd",
        title: "دستیار دندانپزشک",
        category: "بهداشت و درمان",
        city: "اصفهان",
        type: "تمام وقت",
        urgent: "فوری",
        id:"11"
      },
      {
        background: "#e5db28",
        title: "کارشناس معماری (سه بعدی)",
        category: "مهندسی",
        city: "تهران",
        type: "تمام وقت",
        urgent: "فوری",
        id:"12"
      },
    ],
  },
  mutations: {
    setSearch(state, payload) {
      state.searchedText = payload.text;
      state.searchedLoc = payload.loc;
    },
    SET_RESULT(state, payload) {
      state.searchResult = payload;
    },
  },
  actions: {
    findAdvertise({ commit, getters }, payload) {
      let advertises = getters.advertise;
      let searchResult;

      // find search result by searching name and location
      if (!payload.category) {
        searchResult = advertises.filter((ad) => {
          // if both of the fields are filled
          if (!!payload.text && payload.loc != -1) {
            return ad.title.includes(payload.text) && ad.city == payload.loc;
          } else if (!payload.text && payload.loc == -1) {
            return advertises;
          } else {
            return ad.title.includes(payload.text) || ad.city == payload.loc;
          }
        });
      }
      // find search result by searching categories
      else {
        searchResult = advertises.filter((ad) => {
          return ad.category == payload.category;
        });
      }
      commit("SET_RESULT", searchResult);
    },
  },
  getters: {
    advertise(state) {
      return state.advertise;
    },
    searchResult(state) {
      return state.searchResult;
    },
  },
});
