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
