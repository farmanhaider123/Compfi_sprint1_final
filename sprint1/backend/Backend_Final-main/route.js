const express = require('express');
const router = express.Router();
const { signUp, signIn, postotp, resend, Resetmail, ChangePass } = require('./Controller/auth');
const { GetUserByid, GetAlluser, GetUserByemail, UpdateUserStatus, UpdateUser,DeleteUser } = require('./Controller/user');
const Menu = require('./Controller/Menu')
const SubMenu = require('./Controller/submenu')
const UserRole = require('./Controller/Role.js')
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/otp", postotp);
router.post("/resendotp", resend)
router.post("/resetmail", Resetmail)
router.get("/getuserByemail/:id", GetUserByemail)
router.get("/getuserByid/:id", GetUserByid)
router.get("/getalluser", GetAlluser)
router.post('/updateUser', UpdateUser)
router.post('/DeleteUser',DeleteUser)
router.post("/changepass", ChangePass)
router.post('/CreateModule', Menu.CreateModules)
router.get("/getuserrolelist", UserRole.GetUserRoleList)
router.post("/createuserrole", UserRole.CreateUserRole)
router.put("/updateuserrole/:id", UserRole.UpdateUserRole)
router.put('/updateModule', Menu.UpdateModule)
router.post('/toggleModuleStatus',Menu.toggleModuleStatus)
router.get('/GetModuleList', Menu.GetModuleList)
router.post('/CreateSubModule', SubMenu.CreateSubModules)
router.put('/updateuserstatus', UpdateUserStatus)
router.post('/toggleRoleStatus', UserRole.toggleRoleStatus)
router.post('/deleteRole', UserRole.deleteRole)
router.post('/getRolebyid',UserRole.GetRoleByid)
module.exports = router;