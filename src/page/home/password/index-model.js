import { Base } from '../../../resource/utils/base.js'
const app = getApp()
class Index extends Base {
  constructor() {
    super()
  }

  // 获取首页信息
  getIndexData(callback) {
    callback && callback(res.data.data)
  }
}

export { Index }