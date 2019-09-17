const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/login', async (req, res, next)=>{
    try{
        passport.authenticate('login', async (err, connect) => {
            console.log(req.body);   
            if(err) next(err);
                if(connect) {
                    const token = jwt.sign({ username : req.body.username}, 'CLESECRET');
                    res.status(200).json({
                        token 
                    });
                }else{
                res.status(401).json({
                    message : 'erreur d authentification'
                })
            }
        })(req,res,next);
    }catch(err){
        next(err);
    }
    
        });


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;
