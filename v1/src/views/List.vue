<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide v-for="(item,index) in swiperList" :key="index" class="swiper_item">
        <img :src="item.imgUrl" alt="轮播图" class="pic"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul style="margin-left: 20px">
      <li @click="btn_click(index)" v-bind:class="{'li-active':i==index}" v-for="(item,index) in pageList"
          :key="index">
        {{item.title}}---{{item.content}}
      </li>
    </ul>
    <div class="welcome-css">欢迎来到新闻列表</div>
    <div>
      <button class="btn-css" type="button" @click="login()">返回</button>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  import {getImageData} from '../api'
  import {testApi} from '../service/api'

  export default {
    name: 'Swiper',
    components: {
      swiper,
      swiperSlide,
    },
    data () {
      return {
        i: '',
        swiperList: [],
        /*banners:[
          '././assets/logo.png',
          '../../static/slider1.jpeg',
          '../../static/slider2.jpeg',
          '../../static/slider3.jpeg',
          '../../static/slider4.jpeg',
          '../../static/slider5.jpeg',
        ],*/
        swiperOption: {
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            // type: 'fraction'
          }
        },
        /* navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
         }*/
      }
    },
    store,
    name: 'List',
    computed: {
      pageList () {
        return store.state.lists
      },
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },

    mounted () {
       /* getImageData({}).then(res => {
          console.log('人数：' + res)
        }).catch(err => {
            console.log(err)
          }
        )*/

      // 请求接口数据
      /*getImageData({
      }).then(res => {
        console.log('人数：' + res)
      }).catch(err => {
          console.log(err)
        }
      )*/

     /* this.$axios.get('../../static/data.json').then(res => {
        this.swiperList = res.data.result.swiperList
        console.log(res.data.result.swiperList)
      }).catch(err => {
          console.log(err)
        }
      )*/

    },
    created () {
      //只有一张图片时不轮播
      this.swiperOption.autoplay = this.swiperList.length != 1 ? {
        disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
        delay: 3000, // 自动切换的时间间隔（单位ms）
      } : false
    },
    methods: {
      btn_click (index) {
        this.i = index
      },
      goBack () {
        this.$router.push('/Login')
      },
      login () {
        testApi({
        }).then(res=>{
          console.log(res)
        })
      },
    }
  }
</script>

<style scoped>
  .li-active {
    background: #42b983;
  }

  .welcome-css {
    position: fixed;
    margin: 0 auto;
    top: 40%;
    left: 0px;
    right: 0px;
    width: 130px
  }

  .btn-css {
    position: fixed;
    margin: 0 auto;
    left: 0px;
    right: 0px;
    top: 50%;
    width: 50px;
  }

  .swiper {
    width: 100%;
    min-height: 1px;
  }

  .pic {
    width: 100%;
  }
</style>
