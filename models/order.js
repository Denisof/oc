var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;
var schema = new Schema({
	
	items: {
		type:Array,
		require:true
	},
	total: {
		type: Number,
		require: true
	},
	firstname : {
		type: String,
		require: true
	},
	lastname : {
		type:String,
		require: true
	},
	email : {
		type :String,
		require: true
	},
	
})


exports.Order = mongoose.model('Order',schema);