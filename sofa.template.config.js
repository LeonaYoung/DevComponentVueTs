module.exports = {
  name: "dev-component-vue-ts",
  type: "component",
  frame: 'vue',
  isTs: true,
  isBlank: true,
  detail: '通用Vue组件模板；',
  parentId: null,
  description: 'vue dev component sample, reference: https://github.com/vuesion/vuesion',
  path: 'https://github.com/LeonaYoung/DevComponentVueTs.git',
  version: '0.0.1',
  status: 1,
  approveStatus: 1,
  pulgins: {
    hook: [
      {
        name: 'replaceName',
        params: {
          originStr: 'VueDevComponent',
          targetStr: 'HaHa',
          type: 'compoentsPath',
        },
      },
    ],
  },
};