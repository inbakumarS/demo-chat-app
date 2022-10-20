const express=require('express');

const router=express.Router();


router.get('/add-product',(req, res, next)=>{
console.log('user exists');
res.send('<h5>Enter you username</h5><form action ="/" method="POST"><input type="text" name ="username"><button type="submit">Submit</button></form>');

//res.send('<form action="/product" method="POST"><input type="text" name="title" required><button type="submit">Send</button>');
});
router.post('/',(req,res,next)=>{
   localStorage.setItem(username, req.body.username);
   res.send('<h5>Enter you message</h5><form actiom="/message" method="POST"><input type="text" name ="message"><button type="submit">Submit</button></form>');
   // res.redirect('/');
});

router.post('/user-product',(req,res,next)=>{
   //app.use('/message', (req,res,next)=>{
      res.redirect('/');
});


module.exports=router;