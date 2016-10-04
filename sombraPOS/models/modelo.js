var mongoose = require('mongoose');
var schema = mongoose.Schema;
//var md5 = require('md5');






var Modelo = schema({
	usuario : String,	
	password: String

});

var Usuario = mongoose.model('Usuario',Modelo);
module.exports = Usuario;