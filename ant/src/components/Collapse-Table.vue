<template>
  <div>
    <table>
      <tr>
        <th>站点</th>
        <th>集放</th>
        <th>编码</th>
        <th>名称</th>
        <th>类型</th>
      </tr>
      <tr>
        <td>站点111</td>
        <td>集放222</td>
        <td>编码333</td>
        <td>名称444</td>
        <td>类型655</td>
      </tr>
      <tr>
        <td colspan="5">
          <a-collapse defaultActiveKey="1" :bordered="false">
            <a-collapse-panel header="111" key="1" :style="customStyle">
              <a-collapse defaultActiveKey="2" :bordered="false">
                <a-collapse-panel header="aaa" key="4" :style="customStyle"></a-collapse-panel>
                <a-collapse-panel header="bbb" key="2" :style="customStyle">
                  <a-collapse defaultActiveKey="6" :bordered="false">
                    <a-collapse-panel header="AAA" key="5" :style="customStyle"></a-collapse-panel>
                    <a-collapse-panel header="BBB" key="6" :style="customStyle"> </a-collapse-panel>
                  </a-collapse>
                  <a-table :columns="columns" :dataSource="data"
                /></a-collapse-panel>
              </a-collapse>
            </a-collapse-panel>
            <a-collapse-panel header="222" key="3" :style="customStyle"> </a-collapse-panel>
          </a-collapse>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];
export default {
  data() {
    return {
      data,
      columns,
      customStyle: "background: #f7f7f7;border:0;border-top: 1px #e8e8e8 solid;overflow: hidden"
    };
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
