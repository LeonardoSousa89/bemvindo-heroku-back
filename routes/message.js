import express from 'express'
import db      from '../database/knex'

const msgRoute = express.Router()

msgRoute.route('/').get(async(req,res)=>{
        await db.select(['msg'])
                .table('welcome')
                .then(msg  => res.status(200).json(msg))
                .catch(err => res.status(500).json(err))
})

export default msgRoute