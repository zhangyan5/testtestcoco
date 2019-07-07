<template>
  <div>
    <swiper
      :options="swiperOption"
      class="swiper"
    >
      <swiper-slide
        v-for="(item,index) in sidle"
        :key="index"
        class="swiper-slide"
      >
        <div>
          {{item}}
        </div>
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  props: {

  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      sidle: [1, 2, 3, 4, 5]

    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {
    swiper, swiperSlide
  }
}
</script>
<style scoped lang='scss'>
.swiper {
  border-bottom: 1px solid #000;
  .swiper-slide {
    width: 100%;
    height: 7rem;
  }
}
</style>
