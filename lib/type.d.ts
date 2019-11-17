import { request, uploadFile } from '@tarojs/taro';
export interface BaseConfig {
    baseURL: string;
    interceptorReq?: (config: any) => any;
    interceptorRes?: (res: any) => any;
}
export declare type ReqConfig = RequestType | uploadType;
export declare type RequestType = {
    option: request.Param;
    middle?: Function;
};
export declare type uploadType = {
    option: uploadFile.Param;
    middle?: Function;
};
