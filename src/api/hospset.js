import request from '@/utils/request'

const API = "/admin/hosp/hospitalSet"
export default{

    // 医院添加
    addHostipal(obj) {
      return request({
        url: `${API}/save`,
        method: 'post',
        data: obj
      })
    },

    // 带查询条件的分页
    getHospsetPage(pageNum,size,searchObj) {
        return request({
          url: `${API}/page/${pageNum}/${size}`,
          method: 'post',
          data: searchObj
        })
      },

      // 根据id删除某个医院设置信息
      removeDataById(id) {
        return request({
          url: `${API}/deleteById/${id}`,
          method: 'delete'
        })
      },

      // 根据id回显
      detail(id){
        return request({
          url: `${API}/detail/${id}`,
          method: 'get'
        })
      },
      //修改医院设置
      update(obj){
        return request({
          url: `${API}/update`,
          method: 'put',
          data:obj
        })
      },
      //批量删除
      batchDelete(ids){
        return request({
          url: `${API}/delete`,
          method: 'delete',
          data:ids
        })
      },
      //修改医院状态
      updateStatus(id,status){
        return request({
          url: `${API}/status/${id}/${status}`,
          method: 'put',
        })
      }
}