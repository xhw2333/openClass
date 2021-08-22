<template>
  <div id="Discuss">
    <ul class="title_wrap">
      <li>讨论区</li>
    </ul>
    <ul class="discuss_area">
      <h3 style="text-align: center" v-show="discussList.length == 0">
        暂无数据
      </h3>
      <li
        @click="goDetaill(index)"
        v-for="(item, index) in discussList"
        :key="index"
      >
        <div class="discuss_content" v-html="item.content"></div>
        <div class="bottom_wrap">
          <div>
            <span class="user">用户名 {{ item.number }}</span>
            <span class="time">发布于 {{ item.time }}</span>
          </div>
          <div>
            <!-- <span class="praise">点赞 99</span> -->
            <span class="comment">评论 {{ item.commentNumber }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="page_wrap">
      <Page
        :total="total"
        :page-size="15"
        @on-change="changePage"
      />
    </div>
    <div class="send_wrap">
      <div id="send_content">
        <TextArea :value="discussContent" v-model="discussContent" />
      </div>
      <div class="send_btn_wrap">
        <span>字数100以内</span>
        <div class="send_btn_row">
          <label class="send_btn" for="file1">上传图片</label>
          <input
            style="display: none"
            id="file1"
            type="file"
            accept=".jpg,.png"
            @change="loadPic($event)"
          />
          <button @click="handleDiscuss()" class="send_btn">发表主题</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from "../../../components/ClassResource/TextArea/TextArea";

export default {
  name: "Discuss",
  components: {
    TextArea,
  },
  data() {
    return {
      //讨论区列表
      discussList: [
        /*  {
          commentNumber: 0,
          content: "1111111111111111111111jjjdneucnnj",
          id: 1,
          number: "32190005448",
          time: "2021-02-21 19:03:37",
        }, */
      ],
      //讨论内容
      discussContent: "",
      //讨论数量
      total: 0,
    };
  },
  methods: {
    //加载图片
    loadPic(e) {
      if(!window.sessionStorage.getItem('userId')) {
        this.$Message.error('请先登录');
        return ;
      }
      let imgFile = e.target;
      //获取所需文件
      let file = imgFile.files[0];
      console.log(file);
      //预加载
      /* var fr = new FileReader();
      fr.onload = () => {
        // let sendContent = document.getElementById('send_content');
        // let img = document.createElement('img');
        // //设置属性
        // // img.src = fr.result;
        // img.src= require("../../../assets/login.png");
        // // img.setAttribute('class','upload_pic');
        // img.style.maxWidth = '400px';
        // //添加图片
        // sendContent.appendChild(img);
        // this.discussContent += `<img style="max-width:400px" src="${require("../../../assets/login.png")}"/>`
        this.discussContent += ` <img style="max-width:400px" src="http://qgailab.com/cloud/course/static/img/produce.764a13f.png"/> `;
      };
      fr.readAsDataURL(file); */

      //挂在后台
      let data = new FormData();
      data.append("file", file);

      const loading = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      this.$http
        .post(this.domain + "/discuss/upload", data)
        .then((res) => {
          console.log(res);
          const { code, msg } = res.data;
          if (code == 1) {
            //图片上传成功
            this.$Message.success("图片上传成功");
            this.discussContent += `<img style="max-width:400px" src="${msg}"/>`;
          } else {
            //上传失败
            this.$Message.error("图片上传失败");
          }
        })
        .catch((err) => {
          this.$Message.error("服务器连接失败");
          console.log(err);
        })
        .finally(() => {
          setTimeout(loading, 0);
        });
    },
    //到讨论回复区
    goDetaill(index) {
      if(!window.sessionStorage.getItem('userId')) {
        this.$Message.error('请先登录');
        return ;
      }
      // this.$router.push("/ClassResources/DiscussDetail");
      this.$router.push({
        path: "/ClassResources/DiscussDetail",
        query: {
          discuss: this.discussList[index],
        },
      });
    },
    //发表讨论
    handleDiscuss() {
      const uId = window.sessionStorage.getItem('userId');
      if(!uId) {
        this.$Message.error('请先登录');
        return false;
      }
      if (!this.discussContent) {
        this.$Message.error("请输入内容");
        return false;
      }
      if (this.discussContent.length >= 200) {
        this.$Message.error("字数超出");
        return false;
      }
      const loading = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      //发表主题
      let data = new FormData();
      data.append("content", this.discussContent.trim());
      data.append("uId", uId); //用户id
      // data.append("uId", 8); //用户id
      this.$http
        .post(this.domain + "/discuss/pd", data)
        .then((res) => {
          console.log(res);
          const { code } = res.data;
          //成功发表
          if (code == 1) {
            this.$Message.success("发表讨论成功");
            this.discussContent = "";
            this.getDisucssList(1);
          } else {
            this.$Message.error("发表讨论失败");
          }
        })
        .catch((err) => {
          this.$Message.error("服务器连接失败");
          console.log(err);
        })
        .finally(() => {
          setTimeout(loading, 0);
        });
    },

    //获取讨论区资源
    getDisucssList(pageNum) {
      let data = new FormData();
      data.append("pageNum", pageNum);
      data.append("pageSize", 15); //每15条数据一页
      const loading = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      this.$http
        .post(this.domain + "/discuss/sd", data)
        .then((res) => {
          console.log(res);
          const { code, data } = res.data;
          if (code == 1) {
            this.$Message.success("获取讨论成功");
            this.discussList = data.list;
            this.total = data.total;
          } else {
            this.$Message.error("获取讨论失败");
          }
        })
        .catch((err) => {
          this.$Message.error("服务器连接失败");
          console.log(err);
        })
        .finally(() => {
          setTimeout(loading, 0);
        });
    },

    /* 分页 */
    changePage(index) {
      index = parseInt(index);

      this.getDisucssList(index);
    },
  },
  created() {
    this.getDisucssList(1);
  },
};
</script>

<style lang="scss" scoped>
#Discuss {
  .title_wrap {
    display: flex;
    align-items: center;
    height: 40px;
    li {
      font-weight: 600;
      font-size: 18px;
      color: #585858;
    }
  }

  .discuss_area {
    li {
      padding: 10px 5px;
      border-bottom: 1px solid #dcdddb;
      color: #868684;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background: #e1f3f5;
      }

      .discuss_content {
        font-size: 18px;
        margin-bottom: 5px;
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;

        img {
          // vertical-align: bottom;
          max-width: 400px;
        }
      }

      .bottom_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user {
          color: #3b3b3b;
          margin-right: 20px;
        }

        .prasie {
        }

        .comment {
          margin-left: 20px;
        }
      }
    }
  }

  .page_wrap {
    margin-top: 10px;
    text-align: center;
  }

  .send_wrap {
    margin-top: 20px;

    #send_content {
      width: 100%;
      height: 200px;
      padding: 10px;
      box-sizing: border-box;
      outline: none;
      border: 1px solid #868684;
      border-radius: 5px;
      resize: none;
    }

    img.upload_pic {
      max-width: 400px;
      // max-height:300px;
    }

    .send_btn_wrap {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: #868684;
        font-size: 14px;
      }

      .send_btn_row {
        .send_btn {
          display: inline-block;
          padding: 5px 40px;
          border: none;
          color: #fff;
          background: #57aeb1;
          cursor: pointer;
          border-radius: 5px;

          &:last-child {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>