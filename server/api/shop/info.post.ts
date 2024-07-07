import { checkAuth } from "~/server/utils"

// 店铺信息接口
export default defineEventHandler(async (event) => {
  const checker = checkAuth(event)
  if (checker) return checker

  return 'Hello Nitro'
})
