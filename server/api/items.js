const router = require('express').Router()
const {Item} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll({
      attributes: ['title', 'url'],
      where: {
        userId: req.user.id
      }
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})
