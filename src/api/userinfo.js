import request from '@/utils/request'

export default{
    getUserInfoPage(pageNum,limit,searchobj) {
        return request({
          url: `/administrator/userinfo/${pageNum}/${limit}`,
          method: 'get',
          params:searchobj
        })
    },
    updateStatus(id,status) {
      return request({
        url: `/administrator/userinfo/${id}/${status}`,
        method: 'put'
      })
    },
    detail(id) {
      return request({
        url: `/administrator/userinfo/detail/${id}`,
        method: 'get'
      })
    },
    approval(id, authStatus) {
      return request({
        url: `/administrator/userinfo/auth/${id}/${authStatus}`,
        method: 'put'
      })
    }


}
