import request from '@/utail/request'

/**
 *
 * @param {String} username 用户名
 * @param {String} password 密码
 * @returns   Promise
 */
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}
