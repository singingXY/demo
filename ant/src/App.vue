<template>
  <div class="hello">
    <a-table :columns="columns" :dataSource="data" :rowKey="key" />
    <!-- <p slot="expandedRowRender" slot-scope="record">a{{ record.ID }}</p> -->
    <!-- <a-table
        slot="expandedRowRender"
        :columns="INcolumns"
        slot-scope="AAA"
        :dataSource="AAA.children"ID
        :rowKey="record => record.id"
        >{{ AAA }}
      </a-table>
    </a-table> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      columns: [],
      INcolumns: [
        {
          title: "组员姓名",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "性别",
          dataIndex: "sex",
          key: "sex"
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age"
        }
      ]
    };
  },
  mounted() {
    this.getCol();
    this.getGoodsList();
  },
  methods: {
    getCol() {
      this.axios.get("/data0.json").then((res) => {
        const { data } = res.data;
        // console.log(res.data.data);
        for (let i = 0; i < data.length; i++) {
          this.columns.push({
            title: data[i].name,
            dataIndex: data[i].code,
            key: data[i].ID
          });
        }
      });
    },
    getGoodsList() {
      this.axios.get("/data.json").then((res) => {
        this.data = res.data.data.result;
        // console.log(this.data);
      });
    }
  }
};
</script>

<style>
table {
  width: 100%;
  text-align: left;
  border-radius: 4px 4px 0 0;
  border-collapse: collapse;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
}
th {
  padding: 16px 16px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
}
td {
  padding: 16px 16px;
  border-bottom: 1px solid #e8e8e8;
}
</style>
