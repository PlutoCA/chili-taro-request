/*
 * @Date: 2019-11-05 17:19:48
 * @LastEditors: Pluto
 * @LastEditTime: 2019-11-06 11:33:25
 */
import { Chain } from '@tarojs/taro'

export function timeoutInterceptor (chain : Chain) {
  const requestParams = chain.requestParams
  return new Promise((resolve, reject) => {
    let timeout : NodeJS.Timeout | null = setTimeout(() => {
      timeout = null
      reject(new Error('网络链接超时,请稍后再试！'))
    }, (requestParams && requestParams.timeout) || 60000)

    chain.proceed(requestParams)
      .then((res: any) => {
        if (!timeout) return
        clearTimeout(timeout)
        resolve(res)
      })
      .catch((err: any) => {
        timeout && clearTimeout(timeout)
        reject(err)
      })
  })
}

export function logInterceptor (chain : Chain) {
  const requestParams = chain.requestParams
  const { method, data, url } = requestParams
  console.log(`http ${method || 'GET'} --> ${url} data: `, data)
  return chain.proceed(requestParams)
    .then((res: any) => {
      console.log(`http <-- ${url} result:`, res)
      return res
    })
}
