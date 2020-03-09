/**
 * @description 环境变量: 接口基地址配置
 */

let buildEnv = process.env.VUE_APP_ENV || ''

const K_V_MAP = new Map<string, string>([
  ['development', 'http://192.168.199.150:8081'],
  ['test', 'http://192.168.199.150:8081'],
  ['production', 'http://192.168.199.150:8081']
])

export default K_V_MAP.get(buildEnv)
