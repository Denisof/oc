var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;
var schema = new Schema({
	option_id : {
		type : Number,
		unique : true,
		require : true
	},
	type : {
		type : String,
		require: true
	},
	sort_order : {
		type: Number
	}
});

exports.Option = mongoose.model('Option',schema);