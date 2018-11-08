
const Router = require('koa-router')
const router = new Router()

router.get('/p/:id', async ({req, res}) => {
  const queryParams = {title: req.params.id}
  await app.render(req, res, '/post', queryParams)
  ctx.respond = false
})



module.exports = router