// option_value_description
// {"option_value_id":"43","option_id":"1","name":"Large"}
var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;
var schema = new Schema({
	option_value_id: {
		type:Number,
		unique: true,
		require:true
	},
	option_id: {
		type:Number
	},
	name :{
		type:String
	}
})


exports.Option_value_description = mongoose.model('Option_value_description',schema);