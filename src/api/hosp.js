import request from '@/utils/request'

export default{
    //查询平台上所有第三方医院的信息
    getPageList(pageNum,size,searchObj) {
        return request({
          url: `/admin/hospital/${pageNum}/${size}`,
          method: 'get',
          params:searchObj
        })
    },
    //根据省id查询对应的市
    getChildList(pid) {
        return request({
          url: `/admin/cmn/childList/${pid}`,
          method: 'get'
        })
    },
    //平台修改医院状态
    updateStatus(id,status) {
        return request({
          url: `/admin/hospital/${id}/${status}`,
          method: 'put'
        })
    },

    getHospById(id) {
        return request({
          url: `/admin/hospital/detail/${id}`,
          method: 'get'
        })
    }
}
