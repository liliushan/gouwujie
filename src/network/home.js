import {request} from './request'

function getHomeData(){
  return request({
    url:'/home/multidata'
  })
}
function getHomeGOOds(page,type){
  return request({
    url:'/home/data',
    params:{
      page:page,
      type:type
    }
  })
}
export {
  getHomeData,getHomeGOOds
}