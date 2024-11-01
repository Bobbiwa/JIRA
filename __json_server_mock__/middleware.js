module.exports = (req, res, next) => {
  const {method,path,body} = req
  if(method === 'POST' && path === '/login') {
    if(body.username === 'admin' && body.password === '123456') {
      return res.status(200).json({
        token:'Bearer 111'
      })
    }else {
      return res.status(400).json({
        'msg':'useranme or password is error!'
      })
    } 
  }
  next()
}