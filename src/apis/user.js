import request from '@/utail/request'
export const getuser = () => {
  return request({
    url: '/user',
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
}
