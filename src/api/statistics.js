import request from '@/utils/request'

export default {
    getCountMap(searchObj) {
        return request({
          url: `/admin/statistics/countByData`,
          method: 'get',
          params:searchObj
        })
      }
}
