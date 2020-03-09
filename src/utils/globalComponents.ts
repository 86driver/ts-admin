import Vue from 'vue'
/**
 * 读取componetns/base下的vue文件并自动注册全局组件
 */
const requireComponent = require.context('../components/base', false, /\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^\.\//, '').replace(/\.vue/, '')

  Vue.component(componentName, componentConfig.default || componentConfig)
})
