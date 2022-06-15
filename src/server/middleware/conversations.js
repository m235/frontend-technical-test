// Need this middleware to catch some requests
// and return both conversations where userId is sender or recipient
module.exports = (req, res, next) => {
  if (/conversation/.test(req.url) && req.method === 'DELETE') {
    const db = req.app.db
    db.get('conversations').removeById(Number(req.query.id)).value()

    // remove all dependencies
    const removable = db._.getRemovable(db.getState(), { foreignKeySuffix: 'Id' })

    removable.forEach((item) => {
      db.get(item.name).removeById(Number(item.id)).value()
    })

    // save json file
    db.write()

    return res.status(200).send()
  }
  if (/conversations/.test(req.url) && req.method === 'GET') {
    // note(mlaigle): simulate a server error
    // throw new Error('fake error')

    const { senderId: userId, ...query } = req.query ?? {}

    const result = req.app.db.get('conversations').filter(query).value()

    if (userId) return res.status(200).json(result?.filter((conv) => conv.senderId == userId || conv.recipientId == userId))

    res.status(200).json(result)
    return
  }

  next()
}
