


const express=require('express')
const authmidelw=require('../mideleware/Auth-midelware')
const router=express.Router()
//const authrouter=require('../constrolar/auth-controlar')
const newrouter=require("../athuntication/regestation")
// router.route('/reg').post(authrouter.reg)
const finddata=require("../Datafind/Alldatafind")
const deleteuser=require("../DelateUser/Delete")
router.route("/reg").post(newrouter.regestation)

router.route("/loginpart").post(newrouter.loginpart)
router.route("/find").get(finddata.finddata)
router.route("/del/:id").delete(deleteuser.deleteuser)

module.exports=router



