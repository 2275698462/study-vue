<template>
  <div class="article-page">
    <div
        class="article-item"
        v-for="item in initList"
        :key="item.id"
        @click="toDetail(item.id)"
    >
      <div class="head">
        <img :src="item.creatorAvatar" alt="" />
        <div class="con">
          <p class="title">{{ item.stem }}</p>
          <p class="other">{{ item.creatorName }} | {{ item.createdAt }}</p>
        </div>
      </div>
      <div class="body">
        {{item.content}}
      </div>
      <div class="foot">点赞 {{item.likeCount}} | 浏览 {{item.views}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'AArticle',
  data() {
    return {
      initList:[],
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  async created() {
    const { data: { result: { rows } } } = await axios('https://mock.boxuegu.com/mock/3083/articles');
    this.initList = rows
  }
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}

.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;

  .head {
    display: flex;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }

    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;

      p {
        margin: 0;
        line-height: 1.5;

        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }

        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }

  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>