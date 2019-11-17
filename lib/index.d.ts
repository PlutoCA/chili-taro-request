import { ReqConfig, BaseConfig } from './type';
export default function chiliBase(config: BaseConfig): <T>(regConfig: ReqConfig) => Promise<T>;
/**
 *  根据参数来校验是否是请求吧
 * @param {(uploadFile.Param | request.Param)} params
 * @returns {params is uploadFile.Param}
 */
