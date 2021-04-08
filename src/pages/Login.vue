<template>
  <div class="login-container">
    <div class="side-img"></div>
    <div class="side-login">
      <div class="login-form">
        <h1>Login in</h1>
        <input type="text" placeholder="USERNAME" v-model="username" />
        <input type="password" placeholder="PASSWD" v-model="password" />
        <input type="submit" @click="submitMethod" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import router from "../router/index";

export default defineComponent({
  name: "Login",
  setup() {
    const username = ref("admin");
    const password = ref("admin");

    const submitMethod = () => {
      router.push("/dashboard/house");
    };

    return {
      username,
      password,
      submitMethod,
    };
  },
});
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  position: relative;
}

.login-container .side-img {
  width: 75%;
  height: 100%;
  /* background-color: rgb(231, 226, 203); */
  background-image: url("src/assets/map.png");
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.login-container .side-login {
  position: absolute;
  right: 0;
  top: 0;
  width: 25%;
  height: 100%;
  background-color: rgb(231, 226, 203);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container .side-login .login-form {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 236, 230);
  padding: 40px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.login-container .side-login .login-form h1 {
  text-transform: uppercase;
  font-family: Tahoma;
  margin-top: 150px;
}

.login-container .side-login .login-form input {
  margin-top: 25px;
  width: 100%;
  height: 30px;
  padding: 5px 7px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-sizing: content-box;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 300;
}

.login-container .side-login .login-form input[type="submit"] {
  max-width: 100px;
  max-height: 30px;
  background: #677eff;
  color: #222222;
  font-size: 16px;
  font-weight: 600px;
  position: relative;
  right: 50%;
  transform: translateX(50%);
}
</style>