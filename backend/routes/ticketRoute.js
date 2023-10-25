const express = require('express')
const{getTickets,createTicket,getTicket,deleteTicket,updateTicket}= require('../controllers/ticketController')

const router = express.Router()

const {protect} = require('../middlewares/authMiddleware')
const noteRouter = require('./noteRoute')
router.use('/:ticketId/notes', noteRouter)

router.route('/').get(protect, getTickets).post(protect,createTicket)
router.route('/:id').get(protect,getTicket).delete(protect,deleteTicket).put(protect,updateTicket)

module.exports = router 