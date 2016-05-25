var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;
var schema = new Schema({
	product_id: {
		type:Number,
		unique: true,
		require:true
	},
	model: {
		type:String
	},
	quantity: {
		type: Number
	},
	stock_status_id : {
		type: Number,
		require: true
	},
	image : {
		type:String
	},
	price : {
		type :Number
	},
	status : {
		type : Number
	}
})


exports.Product = mongoose.model('Product',schema);
