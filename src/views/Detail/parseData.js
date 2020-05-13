export  default class parseData {
  constructor(columns,itemInfo,shopInfo,detailInfo,itemParams,rate){
    this.title = itemInfo.title
    this.topImages = itemInfo.topImages
    this.desc = itemInfo.desc   //  描述
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice //  旧的价格
    this.discount = itemInfo.discountDesc //  价格类型的描述
    this.columns = columns // 跟销量相关的信息
    this.services = shopInfo.services
    this.lowNowPrice = itemInfo.lowNowPrice //  现在的价格

    // 店铺相关的信息  
    this.shopName = shopInfo.name
    this.shopScore = shopInfo.score
    this.shopGoods = shopInfo.cGoods
    this.shopLogo = shopInfo.shopLogo
    this.shopCsells = shopInfo.cSells

    //  商品的详细详细信息 detail_info
    this.detailDesc = detailInfo.desc
    this.detailKey =  detailInfo.detailImage[0].key
    this.detailList = detailInfo.detailImage[0].list

    //  商品参数
    this.info = itemParams.info.set
    this.rule = itemParams.rule.tables[0]

    //  评论数据
    this.comment = rate.list
  }
}