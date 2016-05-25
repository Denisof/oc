var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema({
	product_id :{
		type: Number,
		unique : true,
		require : true
	},
	name : {
		type:String,
		require:true
	}

});

exports.Product_description = mongoose.model('Product_description',schema);
