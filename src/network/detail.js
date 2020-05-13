import {request} from './request'

function get_detail_data(iid){
  return request({
    url:'/detail',
    params:{
      iid:iid
    }
  })
}
export {get_detail_data}