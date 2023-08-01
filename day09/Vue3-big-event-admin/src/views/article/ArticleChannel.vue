<script setup>
import { ref, onMounted } from 'vue'
import { artGetChannelsService } from '@/api/article'
import { Delete, Edit } from '@element-plus/icons-vue'

const channelList = ref([])
const loading = ref(false)
const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}
onMounted(() => {
  getChannelList()
})

const onEditChannel = (row) => {
  dialog.value.open(row)
}
const onDelChannel = (row) => {
  console.log(row)
}

// 弹层相关
const dialog = ref()

const onAddChannel = () => {
  dialog.value.open({})
}
</script>
<template>
  <channel-edit ref="dialog"></channel-edit>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel"> 添加分类 </el-button>
    </template>

    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"> </el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
  </PageContainer>
</template>
