<template>
  <div>
    <div class="search-bar">
      <van-row class="test-row">
        <van-col
          span="3"
          class="col1"
        ><img
            class="locaImg"
            :src="loImg"
            alt=""
          ></van-col>
        <van-col
          span="15"
          class="col2"
        ><input type="text"></van-col>
        <van-col
          span="6"
          class="col3"
        ><button>btn2</button></van-col>
      </van-row>
    </div>
    <!-- 轮播图部分 -->
    <div class="sweper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item
          v-for="(item,index) in bannerPic"
          :key="index"
        >
          <img
            v-lazy="item.image"
            alt=""
            width="100%"
          >
        </van-swipe-item>
      </van-swipe>

    </div>
    <!-- 商品类型 bar -->
    <div class="type-bar">
      <div
        v-for="(item,index) in category"
        :key="index"
      >
        <img
          v-lazy='item.image'
          src=""
          alt=""
        >
        <span>
          {{item.mallCategoryName}}
        </span>
      </div>
    </div>
    <!-- adbanner -->
    <div>
      <img
        src=""
        alt=""
        v-lazy='adbanner'
        width="100%"
      >
    </div>
    <!-- 商品推荐 -->
    <div class="goods">
      <div class="title">商品推荐</div>
      <div class="recommond">
        <swiper
          class="swipers"
          :options="swiperOption"
        >
          <swiperSlide
            class="swiper-slide"
            v-for="(item,index) in recommondGoods"
            :key='index'
          >
            <div class="recommond-item">
              <img
                :src="item.image"
                alt=""
              >
              <div class="re-name">{{item.goodsName}}</div>
              <div class="re-price">￥{{item.mallPrice}}(￥{{item.price}})</div>
            </div>
          </swiperSlide>
        </swiper>
      </div>
    </div>
    <!-- 楼层效果 -->
    <div class="floor">
      <div class="floor-one">
        <div class="floor1-left">
          <img
            :src="floor1_0.image"
            alt=""
          >
        </div>
        <div class="floor1-right">
          <div class="floor1-top">
            <img
              :src="floor1_1.image"
              alt=""
            >
          </div>
          <div class="floor1-down">
            <img
              :src="floor1_2.image"
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="floor-two">
        <div
          v-for="(item,index) in floor1.slice(3)"
          :key="index"
        >
          <img
            :src="item.image"
            alt=""
          >
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      loImg: require('./../../assets/img/location.png'),
      bannerPic: [],
      category: [],
      adbanner: '',
      recommondGoods: [],
      floor1: [],
      floor1_0: {},
      floor1_1: {},
      floor1_2: {},
      floor3: []
    }
  },
  created () {
    Axios({
      url: 'https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/index',
      method: 'get'
    })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.category = response.data.data.category
          this.adbanner = response.data.data.advertesPicture.PICTURE_ADDRESS
          this.bannerPic = response.data.data.slides
          this.recommondGoods = response.data.data.recommend
          this.floor1 = response.data.data.floor1
          this.floor1_0 = this.floor1[0]
          this.floor1_1 = this.floor1[1]
          this.floor1_2 = this.floor1[2]
        }
      })
      .catch(() => {
      })
  },
  methods: {

  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang='scss'>
.test-row {
  background-color: rgb(173, 73, 73);
  height: 40px;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .col1 {
    img {
      width: 1rem;
      height: 1rem;
    }
  }
  .col2 {
    input {
      outline: none;
      width: 100%;
      border: none;
      height: 30px;
      border-bottom: 1px solid black;
      background-color: transparent;
    }
  }
  .col3 {
    button {
      border: none;
      height: 30px;
      border-radius: 2px;
      background-color: #fff;
    }
  }
}
.sweper-area {
  width: 100%;
  max-height: 20rem;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.1rem 0.3rem 0.1rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div {
    width: 20%;
    padding: 0.3rem;
    font-size: 12px;
    text-align: center;
    img {
      width: 90%;
    }
  }
}
.goods {
  background-color: #fff;
  margin-top: 0.3rem;
  .title {
    border-bottom: 1px solid #000;
    font-size: 14px;
    padding: 0.2rem;
    color: rgb(206, 73, 73);
  }
  .recommond {
    border-bottom: 1px solid #000;
    .swipers {
      .swiper-slide {
        .recommond-item {
          font-size: 12px;
          text-align: center;
          width: 90%;
          img {
            width: 90%;
          }
        }
      }
    }
  }
}
.floor {
  .floor-one {
    display: flex;
    width: 100%;
    flex-direction: row;
    border-bottom: 1px solid #000;
    .floor1-left {
      width: 50%;
      box-sizing: border-box;
      border-right: 1px solid rgb(10, 9, 9);
      padding-top: 1px;
      img {
        width: 100%;
        vertical-align: bottom;
      }
    }
    .floor1-right {
      display: flex;
      flex-direction: column;
      font-size: 0;
      width: 50%;
      .floor1-top {
        border-bottom: 1px solid rgb(19, 18, 18);
        img {
          width: 100%;
        }
      }
      .floor1-down {
        img {
          width: 100%;
        }
      }
    }
  }
  .floor-two {
    display: flex;
    flex-direction: row;
    border-right: 1px solid #000;
    div {
      width: 100%;
      box-sizing: border-box;
      &:first-child {
        border-right: 1px solid #000;
      }
      img {
        width: 100%;
        vertical-align: top;
      }
    }
  }
}
</style>
