<style>
  img{
    width: 100%;
  }
  .show-image{
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px #C2C2C2;
  }
  h2{
    font-size: 16px;
    color: #B2B2B2;
    height: 30px;
    line-height: 30px;
    text-indent: 10px;
    background: #fff;
  }
</style>

<template>
  <div v-for="item in message.data.response" class="show-image">
    {{item.file_url}}
    <img :src="item.image.url" v-show="item.image.url">
    <h2>{{item.url}}</h2>
  </div>

</template>


<script>
export default {
  data() {
    return {
      message:'水电费'
    }
  },
  ready() {
    this.$http({url: 'http://transit.hakupoint.com/?reg=https://api.desktoppr.co/1/wallpapers?page=2'}).then(function(response){
      this.message = response;
    },function(response){
      console.log(response);
    });
  }
}

</script>