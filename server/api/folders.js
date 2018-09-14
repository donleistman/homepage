const router = require('express').Router()
const {Folder} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const folders = await Folder.findAll({
      attributes: ['title'],
      where: {
        userId: req.user.id
      }
    })
    res.json(folders)
  } catch (err) {
    next(err)
  }
})
