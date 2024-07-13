<script>
import AHeader from './components/AHeader.vue'
import AMain from './components/AMain.vue'
import AFoot from './components/AFoot.vue'
import AFather from './components/AFather.vue'
import ADialog from './components/ADialog.vue'
import ATable from "@/components/ATable.vue";
import MyTag from "@/components/MyTag.vue";

export default {
  data() {
    return {
      list: [
        {id: 1, name: '张小花', age: 18},
        {id: 2, name: '孙大明', age: 19},
        {id: 3, name: '刘德忠', age: 17},
      ],
      list2: [
        {id: 1, name: '赵小云', age: 18},
        {id: 2, name: '刘蓓蓓', age: 19},
        {id: 3, name: '姜肖泰', age: 17},
      ]
    }
  },

  components: {
    MyTag: MyTag,
    AHeader: AHeader,
    AMain: AMain,
    AFoot: AFoot,
    Father: AFather,
    ADialog: ADialog,
    ATable: ATable,
  }
}

</script>

<template>
  <div id="app">
    <AHeader></AHeader>
    <AMain></AMain>
    <AFoot></AFoot>
    <hr>

    <Father></Father>
    <hr>

    <ADialog></ADialog>
    <hr>

    <ATable :toSon="list">
      <hr>
      <!-- 有点类似于子传父 -->
      <template #default="obj">
        {{ obj.aaa.id }}
        <button>删除</button>
      </template>
    </ATable>
    <hr>

    <ATable :toSon="list2">
      <button>查看</button>
    </ATable>
    <hr>

    <div class="table-case">
      <table class="my-table">
        <thead>
        <tr>
          <th>编号</th>
          <th>名称</th>
          <th>图片</th>
          <th width="100px">标签</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>梨皮朱泥三绝清代小品壶经典款紫砂壶</td>
          <td>
            <img src="https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg"/>
          </td>
          <td>
            <MyTag></MyTag>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>梨皮朱泥三绝清代小品壶经典款紫砂壶</td>
          <td>
            <img src="https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg"/>
          </td>
          <td>
            <MyTag></MyTag>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }

  .my-table {
    width: 100%;
    border-spacing: 0;
    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      vertical-align: middle;
    }
    th {
      background: #f5f5f5;
      border-bottom: 2px solid #069;
    }
    td {
      border-bottom: 1px dashed #ccc;
    }
    td,
    th {
      text-align: center;
      padding: 10px;
      transition: all 0.5s;
      &.red {
        color: red;
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
}
</style>
