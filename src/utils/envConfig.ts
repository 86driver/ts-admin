/**
 * @description 环境变量: 接口基地址配置
 */

let buildEnv = process.env.VUE_APP_ENV || ''
const K_V_MAP = new Map<string, string>([
  ['development', 'http://localhost:3000'],
  ['test', 'http://localhost:3000'],
  ['production', 'http://localhost:3000']
])

export default K_V_MAP.get(buildEnv)
