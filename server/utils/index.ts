import type { H3Event } from 'h3';
import { SnowflakeIdv1 } from "simple-flakeid"
import jwt from "jsonwebtoken"


const jwtSecret = 'jwtSecret'
const generator = new SnowflakeIdv1({ workerId: 1, seqBitLength: 12 })

export const responseOk = (data: any) => {
  return { code: 0, msg: "success", data }
}

export const responseError = (code: number, msg: string) => {
  return { code, msg, data: {} }
}

export const genUuid = () => {
  return generator.NextId().toString()
}

export const genJwt = (data: any) => {
  return jwt.sign({
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    data
  }, jwtSecret)
}

export const verifyJwt = (token: string) => {
  try {
    const decode = jwt.verify(token, jwtSecret);
    console.log(typeof decode)
    return JSON.parse(JSON.stringify(decode)).data
  } catch (e) {
    console.log("jwt error")
    return null
  }
}

export const checkAuth = (event: H3Event) => {
  if (event.context.auth == null) {
    return responseError(1, '未登录')
  }

  return null
}