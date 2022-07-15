import request from '@/utail/request'
export const getswiper = () => {
  return request({
    url: '/home/swiper'
  })
}
export const getgroup = (id) => {
  return request({
    url: '/home/groups',
    params: { id }
  })
}
