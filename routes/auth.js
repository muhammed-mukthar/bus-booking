const router=require('express').Router()

const { createUserHandler, loginUserHandler } = require("../controller/auth.controller")
const { VerifyUser } = require('../middleware/jwtvalidate')


/* -------------------------------- Register -------------------------------- */
router.post('/register',createUserHandler)

/* ---------------------------------- login --------------------------------- */

router.post('/login',loginUserHandler)

router.get('/',VerifyUser,(req,res)=>{
    res.json('hallo')
})
module.exports = router;