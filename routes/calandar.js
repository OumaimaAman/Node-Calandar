const express = require('express');
const router = express.Router();

let calandarService = require('../services/calandar');

/* GET home page.*/
router.route('/')
  .post( async function(req, res, next) {
    try{
  let result = await calandarService.addCalandar(req.body);
  res.status(201).json(result);
    }catch(err){
      next(err);
    }
})
.get(async function(req, res, next) {
  try{
  let result = await calandarService.getCalandar();
   res.status(200).json(result);
  }catch(err){
    next(err)
  }
});

router.delete('/:id', async (req, res, next)=>{

  let date = calandarService.getDate(req.params.id);
  if(date){
      calandarService.deleteCalandar(req.params.id);
      res.status(204).send();
  }else{
    res.status(404).json({
      message : " id don't exist "
    });
  }

})



module.exports = router;
