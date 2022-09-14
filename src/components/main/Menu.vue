<template>
  <div class="body">
    <nav class="navbar " id="menu">
      <div class="container-fluid" >
        <div class=" right-side">
          <div  id="site-name">
            <img id="img" src="@/assets/image/l.jpg" alt="">
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <nav id="navigation" class="menu">
            <ul id="responsive" class="menu">
                <router-link tag="li" class="menu-list" to="/">
                  خانه
                </router-link>
              <router-link tag="li" class="menu-list" to="/About-Us">
                درباره ما
              </router-link>
              <router-link tag="li" class="menu-list" to="/Contact-Us">
                ارتباط باما
              </router-link>
            </ul>
          </nav>
        </div>
        <div id="border-mobail">
          <div  id="site-img">
            <img id="img-mobail" src="@/assets/image/l.jpg" alt="">
          </div>
      </div>
          <div class="left-side">
            <ul id="login-register">
              <router-link tag="li" to="/login" class="login-register" style="margin-right: 5px">
                <font-awesome-icon class="font" :icon="['fas','fa-unlock']"/>
                ورود
              </router-link>
              <router-link tag="li" to="/Register" class="login-register"><font-awesome-icon class="font" :icon="['fas','fa-user-plus']"/>
              ثبت نام
              </router-link>
            </ul>
          </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav" >
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" to="/">
            خانه
          </router-link>
          <router-link tag="li" class="nav-item" to="/About-Us">
            درباره ما
          </router-link>
          <router-link tag="li" class="nav-item" to="/Contact-Us">
            ارتباط باما
          </router-link>
        </ul>
        <div class="container ris">
          <div class="l-g">
              <div id="unlock">
                <router-link  to="/login" class="col-md-6 font-mobail" style="margin-right: 5px">
                  <font-awesome-icon class="font" :icon="['fas','fa-unlock']"/>
                </router-link>
              </div>
            <div id="border"></div>
              <div id="user">
                <router-link to="/Register" class="col-md-6 font-mobail">
                  <font-awesome-icon class="font" :icon="['fas','fa-user-plus']"/>
                </router-link>
              </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu-component"
}
</script>

<style scoped>
.body{
  position: fixed;
  z-index: 1000;
  top: 0!important;
}
#menu {
  position: relative;
  z-index: 999;
  padding: 0;
  font-size: 16px;
  height: 82px;
  width: 100vw;
  background-color: #ffffff;
  box-shadow: 1px 2px 15px 2px #dbdde0;
}
.container-fluid{
  max-width: 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding-right: 50px;
  box-sizing: border-box;
  position: relative;
}
.right-side {
  float: right;
  width: 100%;
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
  height: 100%;
}
#site-name{
  display: inline-block;
  width: 80px;
  border-left: 1px solid rgba(0,0,0,0.15);
  height: 100%;
}
#img{
  padding: 2px 0 0 10px;
  width:100%;
  margin-top: 3px;
}
#border-mobail{
  display: none;
  border-right: 1px solid rgba(0,0,0,0.15);
  margin-left: 10px;
  height: 100%;
}
#site-img{
  display: inline-block;
  width: 70px;
}
#img-mobail{
  margin: 7px 10px 0 0;
  width:90%;
}
.navbar-toggler{
  display: none;
}
#navigation {
  position: relative;
  display: inline-block;
  margin-top: -1px;
  font-size: 14px;
  font-weight: 500;
}
#responsive {
  list-style: none;
  position: relative;
  float: right;
  margin: 0;
  padding: 0 10px 0 0;
}
.menu-list {
  transition: all 0.25s;
  margin: 0 5px;
  border-radius: 3px;
  position: relative;
  float: right;
  padding: 7px 11px;
  font-size: 14px;
  cursor: pointer;
  color: #585858;

}
.menu-list:hover{
    color: #81b5c1;
}
.left-side{
  border-right: 1px solid rgba(0,0,0,0.15);
  height: 100%;
  padding-left: 40px;

}
#login-register{
  padding-top: 10px;
  padding-right: 20px;

}
.login-register{
  cursor: pointer;
  list-style: none;
  transition: all 0.25s;
  color: #5f5a5a;
  margin-bottom: 5px;

}
.login-register:hover{
  color: #81b5c1;
}
.font-mobail{
  cursor: pointer;
  list-style: none;
  transition: all 0.25s;
  color: #777575;
}
.font-mobail:hover{
  color: #81b5c1;
}
.font{
  padding-left: 5px;
}
.nav-item{
  font-size: 14px;
  cursor: pointer;
  color: #585858;
  padding: 9px 0;
}
.navbar-nav{
  padding-bottom: 15px;
  border-bottom: 1px solid #b7b4b4;
}
.l-g{
  display: flex;
  margin: 15px 0;

}
#unlock{
  margin: 0 20%;
}
#user{
  margin: 0 20%;
}
#border{
  border: 1px solid #b7b4b4;
}
@media (max-width: 767px){
  .container-fluid{
    padding-right: 0!important;
  }
  #site-name{
    display: none;
  }

  #navigation {
    display: none;
  }
  .navbar-toggler{
    display: inline-block;
    margin-right: 10%;
  }
  #navbarNav{
    background-color: white;
    box-shadow: 1px 2px 15px 2px #dbdde0;
  }
  .left-side{
    display: none;
  }
  #border-mobail{
    display: inline-block;
  }
}
</style>