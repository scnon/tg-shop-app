import Joi from "joi"
import { genJwt, responseError, responseOk } from "~/server/utils"

interface LoginRequest {
    id: string
}

// 登录接口
// 新用户 ID 自动注册
export default defineEventHandler(async (event) => {
    const req = await readBody<LoginRequest>(event)

    // const conn = getDB()
    try {
        const schema = Joi.object<LoginRequest>({
            id: Joi.required()
        })

        const value = await schema.validateAsync(req);
        const user = await getUser(value.id)
        if (user == null) {
            // 新用户
            if (await register(value.id)) {
                return responseError(1, '注册失败')
            }
        }

        const token = genJwt(user)
        return responseOk({ user, token })
    } catch (e: any) {
        return responseError(1, e.message)
    }
})

// 获取用户信息
const getUser = async (id: string) => {
    return 123
}

// 注册新用户
const register = async (id: string) => {
    return false
}