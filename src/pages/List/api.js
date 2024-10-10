import request from "@/utils/request";
import { getQueryParams } from "@/utils/tool";

// 查询列表
export async function getList(params) {
  const { current, pageSize, ...bodyData } = params || {
    current: 1,
    pageSize: 10,
  };
  const urlData = { current: current, size: pageSize };
  const urlString = getQueryParams(urlData);
  return request(`/api/list/page?${urlString}`, {
    method: "post",
    data: bodyData,
  });
}
