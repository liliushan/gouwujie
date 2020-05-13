<template>
  <div class="comment">
    <div class="comment_context" v-for="item in detailData.comment ">
        <div class="comment-top">
          <div class="avater">
            <img :src="item.user.avatar" alt="">
          </div>
          <div class="username">{{item.user.uname}}</div>
        </div>
        <div class="pl">
          {{item.content}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
    detailData:{
    type:Object,
    default(){
      return {}
    }
  }
}
}
</script>

<style>
.comment{
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
  overflow: hidden;
}

.comment-top{
  display: flex;
}
.avater{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  margin-top: 10px;
  overflow: hidden;
}
.avater img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.username{
  line-height: 60px;
  margin-left: 20px;
}
.comment_context .pl{
  margin-top: 20px;
  font-size: 18px;
  text-indent: 2em;
}
</style>