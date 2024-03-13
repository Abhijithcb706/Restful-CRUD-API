const express =require('express')
const { create, deleteUser, fetch, update } = require('../controllers/userController')
const route = express.Router();

route.get("/getallusers",fetch)
route.post("/create",create)
route.put("/update/:id",update)
route.delete("/delete/:id",deleteUser)

module.exports=route;