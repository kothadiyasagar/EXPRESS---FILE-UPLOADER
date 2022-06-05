const express = require("express")
const app = express()

const multer = require("multer")
    const  filesstorgeEngine =  multer.diskStorage({
        destination:(req,file,cb)=>{
        cb(null,"./avatar")
        },
        filename:(req,file,cb)=>{
            cb(null, Date.now()+"---"+ file.originalname)   
        }
    })
  const upload = multer({storage:filesstorgeEngine})
  app.post("/profile", upload.single("avatar"),(req, res)=>{
   console.log(req.file)
   res.send("single fille upload success")
  })

app.listen(5000, ()=>{
    console.log("http://localhost:5000/")
})