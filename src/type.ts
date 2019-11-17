/*
 * @Date: 2019-11-06 17:11:09
 * @LastEditors: Pluto
 * @LastEditTime: 2019-11-12 17:06:21
 */
import { request, uploadFile } from '@tarojs/taro'

export interface BaseConfig {
  baseURL: string;
  interceptorReq?: (config : any) => any;
  interceptorRes?: (res : any) => any;
}

export type ReqConfig = RequestType | uploadType

export type RequestType = {
  option: request.Param
  middle?: Function;
}

export type uploadType = {
  option: uploadFile.Param
  middle?: Function;
}
