// option_value
// {"option_value_id":"43","image":"","sort_order":"3"}

var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;
var schema = new Schema({
	option_value_id: {
		type:Number,
		unique: true,
		require:true
	},
	image: {
		type:String
	},
	sort_order: {
		type:Number
	}
})


exports.Option_value = mongoose.model('Option_value',schema);