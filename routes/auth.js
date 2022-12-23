const router=require('express').Router()

const { createUserHandler, loginUserHandler } = require("../controller/auth.controller")


/* -------------------------------- Register -------------------------------- */
router.post('/register',createUserHandler)

/* ---------------------------------- login --------------------------------- */

router.post('/login',loginUserHandler)
module.exports = router;