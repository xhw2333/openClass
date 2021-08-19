<template>
  <div class="log-main">
    <div>
      <div class="log-logo">
        <img src="./../../assets/images/login.png" />
        <img src="./../../assets/images/logo.png" />
      </div>
      <div class="login-div" v-if="htmlId == 1">
        <p>账号登录</p>
        <div class="log-form">
          <div>
            <label>邮箱</label>
            <input
              placeholder="请输入邮箱号"
              @blur="getLoginCode(loginForm.email, 'login-code')"
              v-model="loginForm.email"
            />
          </div>
          <div>
            <label>密码</label>
            <input
              type="password"
              placeholder="请输入密码"
              v-model="loginForm.password"
            />
          </div>
          <div class="code">
            <label>验证码</label>
            <input
              @keydown.enter="login()"
              v-model="loginForm.code"
              placeholder="请先输入邮箱"
            />
            <img
              @click="getLoginCode(loginForm.email, 'login-code')"
              id="login-code"
              src="./../../assets/bg.jpg"
            />
          </div>
        </div>
        <div class="login">
          <div @click="htmlId = 2">注册</div>
          <div @click="login()">登录</div>
        </div>
        <span @click="htmlId = 3">忘记密码?</span>
      </div>
      <div class="login-div" v-if="htmlId == 2">
        <p>账号注册</p>
        <div class="log-form">
          <div>
            <label>学号</label>
            <input placeholder="请输入学号" v-model="registered.number" />
          </div>
          <div>
            <label>邮箱</label>
            <input
              placeholder="请输入邮箱"
              @blur="getLoginCode(registered.email, 'registered-code')"
              v-model="registered.email"
            />
          </div>
          <div>
            <label>手机</label>
            <input placeholder="请输入手机号码" v-model="registered.phone" />
          </div>
          <div>
            <label>密码</label>
            <input
              type="password"
              v-model="registered.tmpPassword"
              placeholder="请输入密码"
            />
          </div>
          <div>
            <label>确认密码</label>
            <input
              type="password"
              v-model="registered.password"
              placeholder="再次确认密码"
            />
          </div>
          <div class="code">
            <label>验证码</label>
            <input
              placeholder="先输入邮箱"
              @keydown.enter="registeredCode()"
              v-model="registered.code"
            />
            <img
              src="./../../assets/bg.jpg"
              @click="getLoginCode(registered.email, 'registered-code')"
              id="registered-code"
            />
          </div>
        </div>
        <div class="login">
          <div @click="registeredCode()">确认注册</div>
          <div @click="htmlId = 1">返回登录</div>
        </div>
      </div>
      <div class="login-div" v-if="htmlId == 3">
        <p>密码找回</p>
        <div class="log-form">
          <div>
            <label>注册邮箱</label>
            <input placeholder="请输入邮箱" v-model="retrieve.email" />
          </div>
          <div class="code">
            <label>验证码</label>
            <input placeholder="先输入邮箱" v-model="retrieve.code" />
            <div id="code-clock" @click="sendVerify()">{{ clock }}</div>
          </div>
          <div>
            <label>新密码</label>
            <input
              type="password"
              placeholder="请输入密码"
              v-model="retrieve.password"
            />
          </div>
          <div>
            <label>确认密码</label>
            <input
              type="password"
              placeholder="请再次确认密码"
              v-model="retrieve.newPassword"
            />
          </div>
        </div>
        <div class="login">
          <div @click="retrieveCode()">确认修改</div>
          <div @click="htmlId = 1">返回登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlId: 1, //1登录 2注册 3找回
      loginForm: {
        email: "",
        password: "",
        code: "",
      },
      registered: {
        number: "",
        email: "",
        tmpPassword: "",
        password: "",
        phone: "",
        code: "",
      },
      retrieve: {
        email: "",
        password: "",
        newPassword: "",
        code: "",
      },
      clock: "发送验证码",
    };
  },
  methods: {
    // 验证邮箱格式
    isEmailValid(email) {
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      return reg.test(email);
    },
    //登录axios
    login() {
      if (!this.loginForm.email) {
        this.$Message.error("请输入邮箱");
        return;
      } else if (!this.loginForm.password) {
        this.$Message.error("请输入密码");
        return;
      } else if (!this.loginForm.code) {
        this.$Message.error("请输入验证码");
        return;
      } else if (!this.isEmailValid(this.loginForm.email)) {
        this.$Message.error("邮箱格式错误");
        return;
      }
      let data = new FormData();
      data.append("email", this.loginForm.email);
      data.append("password", this.loginForm.password);
      data.append("code", this.loginForm.code);
      const vmsg = this.$Message.loading({
        content: "登录中...",
        duration: 0,
      });
      this.$http.post(this.domain + "/user/lo", data).then((res) => {
        console.log(res);
        setTimeout(vmsg, 0);
        const { data } = res.data;
        if (res.data.code == 1) {
          this.$Message.success("登录成功！");
          window.sessionStorage.setItem("userId", data.id);
          window.sessionStorage.setItem("userNumber", data.number);
          setTimeout(() => {
            this.$router.push({ path: "/HomePage" });
          }, 500);
        } else {
          this.getLoginCode(loginForm.email, "login-code");
          this.$Message.info(res.data.msg);
        }
      });
    },
    //找密码axios
    retrieveCode() {
      if (this.retrieve.password != this.retrieve.newPassword) {
        this.$Message.error("两次输入的密码不同");
        return;
      }
      if (!this.retrieve.email) {
        this.$Message.error("请输入邮箱");
        return;
      } else if (!this.retrieve.password) {
        this.$Message.error("请输入密码");
        return;
      } else if (!this.retrieve.code) {
        this.$Message.error("请输入验证码");
        return;
      } else if (!this.isEmailValid(this.retrieve.email)) {
        this.$Message.error("邮箱格式错误");
        return;
      }
      let data = new FormData();
      data.append("email", this.retrieve.email);
      data.append("password", this.retrieve.password);
      data.append("code", this.retrieve.code);
      const vmsg = this.$Message.loading({
        content: "修改中...",
        duration: 0,
      });
      this.$http.post(this.domain + "/user/fp", data).then((res) => {
        setTimeout(vmsg, 0);
        if (res.data[0]) {
          for (let i in res.data) this.$Message.error(res.data[i].errorMessage);
        } else {
          if (res.data.code == 0) {
            this.$Message.error(res.data.msg);
            this.clock == "发送验证码";
          } else {
            this.$Message.success("修改成功！");
          }
        }
      });
    },
    //注册axios
    registeredCode() {
      if (this.registered.password != this.registered.tmpPassword) {
        this.$Message.error("两次输入的密码不同");
        return;
      }
      if (!this.registered.number) {
        this.$Message.error("请输入学号");
        return;
      } else if (!this.registered.email) {
        this.$Message.error("请输入邮箱");
        return;
      } else if (!this.registered.password) {
        this.$Message.error("请输入密码");
        return;
      } else if (!this.registered.phone) {
        this.$Message.error("请输入电话");
        return;
      } else if (!this.registered.code) {
        this.$Message.error("请输入验证码");
        return;
      } else if (!this.isEmailValid(this.registered.email)) {
        this.$Message.error("邮箱格式错误");
        return;
      }
      let data = new FormData();
      data.append("number", this.registered.number);
      data.append("email", this.registered.email);
      data.append("tmpPassword", this.registered.tmpPassword);
      data.append("phone", this.registered.phone);
      data.append("code", this.registered.code);
      const vmsg = this.$Message.loading({
        content: "注册中...",
        duration: 0,
      });
      this.$http.post(this.domain + "/user/re", data).then((res) => {
        setTimeout(vmsg, 0);
        if (res.data[0]) {
          for (let i in res.data) this.$Message.error(res.data[i].errorMessage);
        } else {
          if (res.data.code == 0) {
            this.$Message.error(res.data.msg);
          } else {
            this.$Message.success("注册成功！");
          }
        }
      });
    },
    //获取验证码 email：邮箱 str：img的id
    getLoginCode(email, str) {
      let img = document.getElementById(str);
      if (!this.isEmailValid(email)) {
        this.$Message.error("请输入正确邮箱！");
        img.src = require("./../../assets/bg.jpg");
        return;
      }
      let data = new FormData();
      data.append("email", email);
      if (email)
        this.$http
          .post(this.domain + "/user/drawCode", data, {
            responseType: "blob",
          })
          .then((res) => {
            let blob = new Blob([res.data]);
            img.src = window.URL.createObjectURL(blob);
          });
      else {
        img.src = "./../../assets/bg.jpg";
        img.src = require("./../../assets/bg.jpg");
        this.$Message.error("请输入正确邮箱");
      }
    },
    // 发送验证码
    sendVerify() {
      if (
        this.isEmailValid(this.retrieve.email) &&
        this.clock == "发送验证码"
      ) {
        this.clock = 120;
        let btn = document.getElementById("code-clock");
        btn.classList.add("active");
        let timer = setInterval(() => {
          this.clock -= 1;
          if (this.clock == 0) {
            this.clock = "发送验证码";
            btn.classList.remove("active");
            clearInterval(timer);
          }
        }, 1000);

        let formdata = new FormData();
        formdata.append("email", this.retrieve.email);
        const vmsg = this.$Message.loading({
          content: "发送中...",
          duration: 0,
        });
        this.$http
          .post(this.domain + "/user/getCode", formdata)
          .then((res) => {
            setTimeout(vmsg, 0);
            this.$Message.success("验证码已发送，请查收(两分钟内有效)");
          })
          .catch((err) => {
            setTimeout(vmsg, 0);
            this.$Message.error("服务器连接失败");
          });
      } else {
        this.$Message.warning("请检查邮箱格式");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.log-main {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  > div {
    width: 863px;
    height: 528px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    display: flex;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.24);
    }
    .login-div {
      margin: 0 auto;
      text-align: center;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > p {
        font-size: 22px;
        font-weight: 600;
        color: #585858;
        padding: 24px;
        letter-spacing: 0.1em;
      }
      .log-form {
        margin: 24px 0 0;
        font-size: 14px;
        width: 260px;
        color: #585858;
        > div {
          margin: 20px 0;
          width: 100%;
          label {
            width: 56px;
            display: inline-block;
            text-align: left;
          }
          input {
            width: calc(100% - 60px);
            text-align: center;
            border: none;
            border-bottom: 1px solid #868684;
          }
        }
        .code {
          label {
            float: left;
          }
          input {
            width: 110px;
          }
          div {
            display: inline-block;
            width: 84px;
            padding: 4px 0;
            height: 100%;
            color: white;
            background-color: #7ad3d6;
            color: #868684;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
            &:hover {
              background-color: #3e999b;
              color: white;
            }
            .active {
              background-color: #3e999b;
              color: white;
            }
          }
          img {
            background-color: #585858;
            width: 84px;
            margin: -4px 0 0;
            height: 100%;
            float: right;
            cursor: pointer;
          }
        }
      }
      .login {
        display: flex;
        > div {
          padding: 6px 0;
          width: 125px;
          text-align: center;
          margin: 12px 8px;
          border-radius: 5px;
          color: #585858;
          background-color: #c5ebef;
          transition: background-color 0.3s;
          cursor: pointer;
          &:last-child {
            color: white;
            background-color: #57aeb1;
          }
          &:hover {
            background-color: #3e999b;
            color: white;
          }
        }
      }
      .log-buttom {
        display: flex;
        div {
          display: inline-block;
          margin: 0 6px;
          padding: 12px 36px;
          border-radius: 5px;
          color: #868684;
          background: #f5f5f5;
          cursor: pointer;
          transition: background-color 0.3s;
          &:hover {
            background-color: #7ad3d6;
            color: white;
          }
        }
        .active {
          background-color: #7ad3d6;
          color: white;
        }
      }
      > span {
        color: #3b888b;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          border-bottom: 1px solid #3b888b;
        }
      }
    }
    #code-clock {
      color: white;
    }
    .log-logo {
      width: 35%;
      height: 100%;
      background-color: #7ad3d6;
      display: flex;
      position: relative;
      img {
        &:first-child {
          margin: auto -36px;
          width: calc(100% + 72px);
        }
        &:last-child {
          position: absolute;
          bottom: 8px;
          padding: 12px;
          width: 100%;
        }
      }
    }
  }
}
</style>