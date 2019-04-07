<template>
  <div class="about">
    me
  </div>
</template>
<script>
import BottomNav from "../components/BottomNav.vue";
export default {
  name: "me",
  components: {
    BottomNav
  }
};
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .banner {
    font-size: 0;
    position: relative;
    img {
      width: 100%;
    }
    .intro {
      position: absolute;
      top: 4.6vw;
      left: 23.8vw;
      width: 36.1vw;
      height: 14.8vw;
      font-size: 16px;
      text-align: left;
      padding: 0 3vw;
      .item {
        &.name {
          line-height: 11vw;
          font-size: 6vw;
        }
        &.department {
          line-height: 2vw;
          font-size: 3vw;
        }
      }
    }
  }
  .main {
    flex: 1;
    padding: 9vh 16vw 7vh 10vw;
    background: #f5f5f5 url("../assets/me/bg_wd@3x.png") center no-repeat;
    background-size: 95% 97%;
    .item {
      display: flex;
      .icon-id {
        font-size: 0;
        height: 7.66667vw;
        width: 7.66667vw;
        img {
          width: 100%;
        }
      }
      .msg-nav {
        flex: 1;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 4.6vw;
          color: rgb(51,51,51);
          font-weight: 600;
        }
        .arrow {
          font-size: 0;
          img {
            height: 4vw;
          }
        }
      }
    }
  }
}
</style>