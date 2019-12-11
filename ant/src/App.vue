<template>
  <div class="hello">
    <a-directory-tree showLine showIcon>
      <a-tree-node key="0-0">
        <span slot="title" style="color: #1890ff">parent 1</span>
        <a-tree-node title="parent 1-0" key="0-0-0" class="aaa">
          <a-tree-node title="leaf" key="0-0-0-0" />
          <a-tree-node title="leaf" key="0-0-0-1" />
          <a-tree-node title="leaf" key="0-0-0-2" />
          <a-tree-node title="leaf" key="0-0-0-3" />
          <a-tree-node title="leaf" key="0-0-0-4" />
          <a-tree-node title="leaf" key="0-0-0-5" />
          <a-tree-node title="leaf" key="0-0-0-6" />
          <a-tree-node title="leaf" key="0-0-0-7" />
          <a-tree-node title="8" key="0-0-0-8" />
          <a-tree-node title="9" key="0-0-0-9" />
          <a-tree-node title="10" key="0-0-0-10" />
          <a-tree-node title="11" key="0-0-0-11" />
          <a-tree-node title="12" key="0-0-0-12" />
        </a-tree-node>
        <a-tree-node title="parent 1-1" key="0-0-1">
          <a-tree-node title="leaf" key="0-0-1-0" />
        </a-tree-node>
        <a-tree-node title="parent 1-2" key="0-0-2">
          <a-tree-node title="leaf" key="0-0-2-0" />
          <a-tree-node title="leaf" key="0-0-2-1" />
        </a-tree-node>
      </a-tree-node>
    </a-directory-tree>
    <a-directory-tree
      showLine
      showIcon
      defaultExpandAll
      :treeData="treeData"
      :replaceFields="replaceFields"
    >
    </a-directory-tree>
    <a-tree
      showLine
      showIcon
      multiple
      :treeData="treeData"
      defaultExpandAll
      :replaceFields="replaceFields"
      @select="onSelect"
    >
      <a-icon slot="smile" type="smile-o" />
      <a-icon slot="meh" type="meh-o" />
      <a-icon slot="scissor" type="scissor" />
      <a-icon slot="file" type="file" />

      <template slot="custom" slot-scope="{ expanded }">
        <a-icon :type="expanded ? 'like' : 'dislike'" />
      </template>
      <template slot="custom2" slot-scope="{ expanded }">
        <a-icon :type="expanded ? 'minus' : 'plus'" />
      </template>
      <a-tree-node title="leaf" key="0-0-2-0" />
      <a-tree-node title="leaf" key="0-0-2-1" />
    </a-tree>
  </div>
</template>

<script>
const treeData = [
  {
    name: "parent 1",
    key: "0-0",
    scopedSlots: {
      icon: "custom"
    },
    child: [
      {
        name: "张晨成",
        key: "0-0-0",
        slots: {
          icon: "smile"
        },
        child: [
          {
            name: "leaf",
            key: "0-0-0-0",
            slots: { icon: "meh" },
            child: [
              { name: "leaf", key: "0-0-0-0-0", slots: { icon: "file" } },
              { name: "leaf", key: "0-0-0-0-1", slots: { icon: "file" } }
            ]
          },
          { name: "leaf", key: "0-0-0-1", slots: { icon: "scissor" } }
        ]
      },
      {
        name: "parent 1-1",
        key: "0-0-1",
        scopedSlots: {
          icon: "custom2"
        },
        child: [{ key: "0-0-1-0", name: "zcvc" }]
      }
    ]
  }
];
export default {
  data() {
    return {
      treeData,
      replaceFields: {
        children: "child",
        title: "name"
      }
    };
  },
  methods: {
    onSelect(key, e) {
      console.log(e);
      e.node.onExpand();
    },
    onExpand(e) {
      e.expanded = !e.expanded;
    }
  }
};
</script>

<style>
.ant-tree-treenode-switcher-open {
  max-width: 350px;
}

.aaa > ul {
  max-height: 360px;
  overflow-y: auto;
}
</style>
