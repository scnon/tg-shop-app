// import Joi from "joi"
// import type { Pool, ResultSetHeader } from "mysql2/promise"
// import type { User } from "~/models/database"
// import { getDB } from "~/server/db/mysql"
// import { genJwt, responseError, responseOk } from "~/server/utils"

// interface LoginRequest {
//   id: string
// }

// // 登录接口
// // 新用户 ID 自动注册
// export default defineEventHandler(async (event) => {
//   const req = await readBody<LoginRequest>(event)

//   const conn = getDB()
//   try {
//     const schema = Joi.object<LoginRequest>({
//       id: Joi.required()
//     })

//     const value = await schema.validateAsync(req);
//     const user = await getUser(conn, value.id)
//     if (user == null) {
//       // 新用户
//       if (await register(conn, value.id)) {
//         await conn.end()
//         return responseError(1, '注册失败')
//       }
//     }

//     await conn.end()
//     const token = genJwt(user?.id)
//     return responseOk({ user, token })
//   } catch (e: any) {
//     await conn.end()
//     return responseError(1, e.message)
//   }
// })

// // 获取用户信息
// const getUser = async (conn: Pool, id: string) => {
//   const [rows] = await conn.execute<User[]>('SELECT * FROM users WHERE tid = ?', [id])

//   if (rows.length > 0) {
//     return rows[0]
//   }

//   return null
// }

// // 注册新用户
// const register = async (conn: Pool, id: string) => {
//   const [rows] = await conn.execute<ResultSetHeader>('INSERT INTO users (tid, username) VALUES (?, ?)', [id, `食客${id}`])
//   return rows.affectedRows === 0;
// }