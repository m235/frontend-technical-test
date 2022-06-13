const path = require('path')
const db = require(`${path.dirname(__filename)}/../db.json`)

// Need this middleware to catch some requests
// and return both conversations where userId is sender or recipient
module.exports = (req, res, next) => {
  if (/messages/.test(req.url) && req.method === 'GET') {
    const last = req.query?.last === 'true'
    if (last) {
      const conversationId = req.query?.conversationId

      const result = db?.messages?.filter((message) => message.conversationId == conversationId)?.at(-1)

      res.status(200).json(result)
      return
    }
  }

  next()
}
