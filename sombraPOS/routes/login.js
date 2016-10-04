var express = require('express');
var router = express.Router();
var md5 = require('md5');

var Modelo = require('../models/modelo');

   
   

router.get('/',function(reg,res,next){
	Modelo.find({},function(err1,data){
		if (err1)
		console.log(err1);
		res.json(data); 
	});
});

router.post('/',function(req,res,next){
	Modelo.create(req.body,function(err2,data){
		var objeto = req.body;
		//var password = req.body;
		

		objeto.usuario = String(req.body.usuario);
		objeto.password = String(req.body.password);

		
		res.json(data); 
	});
});
/**************************************************************************************************
router.get('/',function(reg,res,next){
	Modelo.find({},function(err1,data){
		if (err1)
		console.log(err1);
		res.json(data); 
	});
});

router.post('/',function(req,res,next){
	Modelo.create(req.body,function(err2,data){
		var objeto = md5(req.body);
		//var password = md5(req.body);

		objeto.usuario = String(req.body.usuario);
		//objeto.password = md5(req.body.passwor);
		//var hash = md5(objeto.password );
		console.log(objeto);
		
		res.json(data); 
	});
});
/**************************************************************************************************************/

router.put('/:usuario',function(req,res,next){
	var usuario = req.params.id;
	Modelo.findOne({usuario:usuario},function(err,data){
		if (err) 
			console.log(err)
		data.password=req.body.password;
		
		Modelo.update(usuario,data,function(err1,newdata){
			if (err1)
				console.log(err1);
			res.json(newdata);
		});
	});
});



router.delete('/',function(req,res,next){
	Modelo.remove(req.body,function(err2,data){
		var objeto = req.body;
		//var password = req.body;
		

		objeto.usuario = String(req.body.usuario);
		

		
		res.json(data); 
	});
});

/*router.put('/:id',function(req,res,next){
	var id = req.params.id;
	
	Modelo.findByID(id,function(err,data){
		if (err) 
			console.log(err);
		var data = req.body;
		data.password = String(req.body.password);

		
		Modelo.update(usuario,id,function(err1,newdata){
			if (err1) 
				console.log(err1);
					console.log(data.password);
			console.log(id);
			res.json(newdata);
			
		});
	});
});*/

module.exports = router;