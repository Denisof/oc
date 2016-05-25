var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema ({
	category_id :{
		type : Number,
		unique : true,
		require : true
	},
	name : {
		type :String,
		require: true
	},
	description :{
		type :String
	},
	meta_title:{
		type :String
	},
	meta_description : {
		type :String
	},
	meta_keyword : {
		type :String
	},
	image : {
		type : String,
		
	},
	parent_id : {
		type : Number,
		require: true
	},
	top :{
		type : Number,
		require : true
	},
	column : {
		type : Number,
		require : true
	},
	sort_order : {
		type : Number,
		require : true
	},
	status : {
		type : Boolean,
		require : true
	},
	date_added : {
		type : Date,
		default : Date.now
	},
	date_modified :{
		type : Date,
		default : Date.now
	}

	
});



exports.Category = mongoose.model('Category',schema); 

