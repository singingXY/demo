module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": [
      2,
      {
        // 允许声明未使用变量
        vars: "local",
        // 参数不检查
        args: "none"
      }
    ],
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [1, "never"],
    "no-plusplus": 0, // 允许使用一元操作符 ++ 和 --
    quotes: [0, "single"], //使用单引号，0不处理
    quotes: [1, "double"] //使用双引号，1提示是警告
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
