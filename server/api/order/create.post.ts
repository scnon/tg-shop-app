import { checkAuth } from "~/server/utils"

interface OrderCreateRequest {
  // 桌号 
  table_id: string
  // 店铺 ID
  shop_id: string
  // 购物车 ID
  crat_id: string
}

// 创建订单接口
export default defineEventHandler(async (event) => {
  const checker = checkAuth(event)
  if (checker) return checker

  const req = await readBody(event)

  return responseOk({})
})
