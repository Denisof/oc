//{"option_id":"1","name":"Radio"}
var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;
var schema = new Schema({
	option_id: {
		type:Number,
		unique: true,
		require:true
	},
	name: {
		type:String
	}
})


exports.Option_description = mongoose.model('Option_description',schema);
