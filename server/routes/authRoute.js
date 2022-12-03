import express from 'express'
import {userSignup, userLogin} from './../controller/controllers.js'

const router = express.Router()

router.get("/", (req,res)=>{
    console.log("Auth Router is working")
})

router.post("/register", userSignup)

router.post("/login",userLogin)

export default router;