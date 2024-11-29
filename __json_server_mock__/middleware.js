module.exports = (req, res, next) => {
  const {method,path,body} = req
  if(method === 'POST' && path === '/register') {
    if(body.username !== '' && body.password !== '') {
      return res.status(200).json({
        token:'Bearer 111'
      })
    }else {
      return res.status(400).json({
        'msg':'useranme or password is empty!'
      })
    } 
  }
  if(method === 'POST' && path === '/login') {
    if(body.username === 'admin' && body.password === '123456') {
      return res.status(200).json({
        token:'Bearer 111',
        id:'01',
        name:'db',
        title:'junior',
        organization:'R6'
      })
    }else {
      return res.status(400).json({
        'msg':'useranme or password is error!'
      })
    } 
  }

  next()
}