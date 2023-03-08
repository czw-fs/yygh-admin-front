import request from '@/utils/request'

const API = "/admin/hosp/department";
export default{
    getDepartmentList(hoscode) {
        return request({
          url: `${API}/${hoscode}`,
          method: 'get',
        });
    }
} 
