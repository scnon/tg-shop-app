import {verifyJwt} from '../utils';

export default defineEventHandler(async (event) => {
    let token = getHeader(event, 'Authorization')

    if (token) {
        token = token.replace('Bearer ', '')

        const decode = verifyJwt(token)
        console.log(decode)
        if (decode) {
            event.context.auth = decode
        }
    }
})
