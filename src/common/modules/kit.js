import { Message } from 'element-ui'

export default {
  Fuck: error => {
    console.error(error)
    Message.error({
      content: '网络异常，请稍后再试',
      duration: 6,
      closable: true
    })
  },


}
