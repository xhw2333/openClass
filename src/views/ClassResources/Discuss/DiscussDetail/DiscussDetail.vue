<template>
  <div id="DiscussDetail">
    <!-- 讨论区主题回复 -->
    <ul class="title_wrap">
      <li>讨论区回复</li>
    </ul>
    <div class="discuss_theme">
      <div class="discuss_content" v-html="discuss.content"></div>
      <div class="bottom_wrap">
        <div>
          <span class="user">用户名 {{ discuss.number }}</span>
          <span class="time">发布于 {{ discuss.time }}</span>
        </div>
      </div>
    </div>
    <ul class="comment_area">
      <h3 style="text-align: center" v-show="commentList.length == 0">
        暂无数据
      </h3>
      <li v-for="(item, index) in commentList" :key="index">
        <div class="comment_content" v-html="item.content"></div>
        <div class="bottom_wrap">
          <div>
            <span class="user">用户名 {{ item.number }}</span>
            <span class="time">发布于 {{ item.time }}</span>
          </div>
          <div class="praise_wrap">
            <span
              :class="item.star ? 'cancel' : 'praise'"
              @click="handlePraise(index)"
              >{{ item.star ? "取消赞" : "点赞" }} {{ item.starNumber }}</span
            >
            <!-- <span class="comment">评论 99</span> -->
          </div>
        </div>
      </li>
    </ul>
    <div class="page_wrap">
      <Page :total="total" :page-size='15' @on-change="changePage"/>
    </div>
    <div class="send_wrap">
      <div id="send_content">
        <TextArea :value="commentContent" v-model="commentContent" />
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
          <button class="send_btn" @click="handleComment()">回复</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from "../../../../components/ClassResource/TextArea/TextArea";

export default {
  name: "DiscussDetail.vue",
  components: {
    TextArea,
  },
  data() {
    return {
      //讨论主题
      discuss: {},
      //回复列表
      commentList: [
       /*  {
          content: ">1",
          discussId: 10,
          id: 1,
          number: "32190005448",
          star: false,
          starNumber: 0,
          time: "2021-02-21 19:26:15",
        }, */
      ],
      //回复内容
      commentContent: "",
      //回复总量
      total: 0,
    };
  },
  methods: {
    //处理点赞
    handlePraise(index) {
      let { star, starNumber, id } = this.commentList[index];
      const loading = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });

      let data = new FormData();
      data.append("commentId", id);
      data.append("flag", star ? 1 : 0);
      data.append("userId", window.sessionStorage.getItem('userId')); //用户id

      this.$http
        .post(this.domain + "/discuss/star", data)
        .then((res) => {
          console.log(res);
          const { code } = res.data;
          if (code == 1) {
            this.$Message.success(`${star ? "取消赞" : "点赞"}成功`);
            this.commentList[index].star = !star;
            if (star) {
              this.commentList[index].starNumber = --starNumber;
            } else {
              this.commentList[index].starNumber = ++starNumber;
            }
          } else {
            this.$Message.error("处理请求失败");
          }
        })
        .catch((err) => {
          console.log(err);
          this.$Message.error("服务器连接失败");
        }).finally(() => {
          setTimeout(loading, 0);
        });;
    },

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
     /*  var fr = new FileReader();
      fr.onload = () => {
        let sendContent = document.getElementById('send_content');
        let img = document.createElement('img');
        //设置属性
        // img.src = fr.result;
        img.src= require("../../../assets/login.png");
        // img.setAttribute('class','upload_pic');
        img.style.maxWidth = '400px';
        //添加图片
        sendContent.appendChild(img);
        // this.discussContent += `<img style="max-width:400px" src="${require("../../../assets/login.png")}"/>`
        this.commentContent += ` <img style="max-width:400px" src="http://qgailab.com/course/static/img/produce.764a13f.png"/> `;
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
            this.commentContent += `<img style="max-width:400px" src="${msg}"/>`;
          } else {
            //上传失败
            this.$Message.error("图片上传失败");
          }
        })
        .catch((err) => {
          this.$Message.error("服务器连接失败");
          console.log(err);
        }).finally(() => {
          setTimeout(loading, 0);
        });;
    },

    //发表回复
    handleComment() {
      const uId = window.sessionStorage.getItem('userId');
      if(!uId) {
        this.$Message.error('请先登录');
        return false;
      }
      if (!this.commentContent) {
        this.$Message.error("请输入内容");
        return false;
      }
      if (this.commentContent.length >= 200) {
        this.$Message.error("字数超出");
        return false;
      }
      // this.$Message.success(this.discussContent);
      const loading = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      //发表主题
      let data = new FormData();
      data.append("content", this.commentContent);
      data.append("discussId", this.discuss.id);
      data.append("userId", uId); //用户id
      this.$http
        .post(this.domain + "/discuss/pc", data)
        .then((res) => {
          console.log(res);
          const { code } = res.data;
          //成功发表
          if (code == 1) {
            this.$Message.success("发表回复成功");
            this.commentContent = "";
            this.getComment(1);
          } else {
            this.$Message.error("发表讨论失败");
          }
        })
        .catch((err) => {
          this.$Message.error("服务器连接失败");
          console.log(err);
        }).finally(() => {
          setTimeout(loading, 0);
        });;
    },

    //获取回复列表
    getComment(pageNum) {
      const loading = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      let data = new FormData();
      data.append("pageNum", pageNum);
      data.append("pageSize", 15); //每15条数据一页
      data.append("discussId", this.discuss.id);

      data.append("userId", window.sessionStorage.getItem('userId')); //用户id
      this.$http
        .post(this.domain + "/discuss/sc", data)
        .then((res) => {
          console.log(res);
          const { code, data } = res.data;
          if (code == 1) {
            this.$Message.success("获取讨论回复成功");
            this.commentList = data.list;
            this.total = data.total;
          } else {
            this.$Message.error("获取讨论回复失败");
          }
        })
        .catch((err) => {
          this.$Message.error("服务器连接失败");
          console.log(err);
        }).finally(() => {
          setTimeout(loading, 0);
        });;
    },

     /* 分页 */
    changePage(index) {
      index = parseInt(index);

      this.getComment(index);
    },

  },
  created() {
    this.discuss = this.$route.query.discuss;
    this.getComment(1);
    console.log(this.discuss);
  },
};
</script>

<style lang="scss" scoped>
#DiscussDetail {
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

  .discuss_theme {
    padding: 10px 10px 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid #dcdddb;
    color: #868684;
    background: #e1f3f5;

    .discuss_content {
      font-size: 18px;
      margin-bottom: 20px;
      display: flex;
      align-items: flex-end;
    }

    .bottom_wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user {
        color: #3b3b3b;
        margin-right: 20px;
      }

      .comment {
        margin-left: 20px;
      }
    }
  }

  .comment_area {
    li {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #dcdddb;
      color: #868684;
      .comment_content {
        font-size: 14px;
        margin-bottom: 10px;
        display: flex;
        align-items: flex-end;
      }

      .bottom_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user {
          color: #3b3b3b;
          margin-right: 20px;
        }

        .praise_wrap {
          span {
            display: inline-block;
            width: 65px;
            text-align: center;
            padding: 2px 5px;
            border-radius: 2px;
            cursor: pointer;

            &.praise {
              background: #fba9a9;
              color: #fff;
            }

            &.cancel {
              background: #fbdaa9;
              color: #868684;
            }
          }
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