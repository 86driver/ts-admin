// delete obj key: value
interface IStringObj {
  [name: string]: string | any[]
}
export const omit = (obj: IStringObj, uselessKeys: string[]) => {
  uselessKeys.forEach(key => {
    delete obj[key]
  })
  return obj
}

// format and filter json data using filterKeys array
export const formatJson = (filterKeys: Array<string>, jsonData: any) =>
  jsonData.map((data: any) => filterKeys.map((key: string) => data[key]))

// reset obj value to '', K: do not need to be set ''
export function resetObjValue2NoneString<T, K extends keyof T>(obj: T, keys: K[]): void {
  let Arr: K[] = Object.keys(obj) as K[]
  for (let index = 0; index < Arr.length; index++) {
    const e = Arr[index]
    if (!keys.includes(e)) {
      obj[e] = '' as unknown as T[K]
    }
  }
}
// check obj value of some key is ''
export function checkNoneString<T, K extends keyof T>(obj: T, keys: K[]): boolean {
  let Arr: K[] = Object.keys(obj) as K[]
  let inters: K[] = Arr.filter(item => !keys.includes(item))
  return inters.some(item => obj[item] === '' as unknown as T[K])
}

// return variable type
export function getType(v: any): string {
  return Object.prototype.toString.call(v).slice(8, -1).toLocaleLowerCase()
}

// judge arr has unique string
export function isUniqueStringArray(v: string[]): boolean {
  let arr: string[] = Object.assign([], v)
  let leng = arr.length
  let newArr = arr.map(item => item.trim())
  let newLeng = [...new Set(newArr)].length
  return newLeng < leng
}

// find obj index in objArr
export function findIndexOfObj(v: any, arr: any[]): number | never {
  if (v.id === void 0) {
    throw new Error('params must have a id')
  }
  let index = arr.findIndex(item => item.id === v.id)
  return index
}

// set [[],[]] itemArr last item to [], 取出内层数组最后一项
export function setHighArr2lowArr(list: any[][]): any[] | never[] {
  let t: any[] = deepCopy(list)
  let temp: any[] = []
  t.forEach((item: any) => {
    temp.push(item.pop())
  })
  return temp
}
// deep clone
export function isObj(obj: object) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}
export function deepCopy(obj: any, hash = new WeakMap()) {
  if (hash.has(obj)) return hash.get(obj)
  let cloneObj = Array.isArray(obj) ? [] : {} as any
  hash.set(obj, cloneObj)
  for (let key in obj) {
    cloneObj[key] = isObj(obj[key]) ? deepCopy(obj[key], hash) : obj[key]
  }
  return cloneObj
}

// compare 2 dataTime of 'yyyy-mm-dd hh:mm:ss' || 'yyyy-mm-dd'
export function compareDate(start: string, end?: string): boolean | void {
  if (start === '') {
    throw new Error('startDate must have a value!')
  }
  if (start && end === '') {
    return true
  }
  if (start && end) {
    let s = new Date(start).getTime()
    let e = new Date(end).getTime()
    return e - s > 0
  }
}

// repeat a string
function repeatString(n: number, value: string): string {
  return new Array(n + 1).join(value)
}

// return a padding function, padNum: int
export function getPadFunc(padNum: number): Function {
  return function(targetNum: number): string {
    if (typeof targetNum === 'undefined') return '0.' + repeatString(padNum, '0')
    let floatNum = Math.round(targetNum * 10 * padNum) / (10 * padNum)
    let s = floatNum.toString()
    let rs = s.indexOf('.')
    if (rs < 0) {
      rs = s.length
      s += '.'
    }
    while (s.length <= rs + padNum) {
      s += '0'
    }
    return s
  }
}
