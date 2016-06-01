
var _ = require('underscore');
var mongoose  = require('../libs/mongoose');


function setCart(req, res, next){
	
		res.locals.cart = {};
		res.locals.cart.items = req.session.cart ? req.session.cart.items ? req.session.cart.items:[] : [];
		res.locals.cart.total = req.session.cart ? req.session.cart.total ? req.session.cart.total : 0: 0;

	
	
	
	
	function Cart(){
		if(req.session.cart == undefined ){
				console.log('ddd');
					req.session.cart = {};
					req.session.cart.items = [];
					req.session.cart.total = 0;
			}
		console.log(req.session);
		function compareOptions (cartElement,product){
			
			return _.every(cartElement.options,function (element){
				return _.every(product.options,function(option){
					if(element.product_option_id == option.product_option_id){
						if(_.has(element,'value')) return element.value == option.value
							else return element.product_option_value_id == option.product_option_value_id
					}else{
						return true
					}
				})
			});
		}

		this.addProduct = function(product,quantity){
			// options = options || [] ;

			var found = false;
			
			if(product.options != undefined && product.options.length > 0){
				product.options = organizeOptions(product.options);
				
				if(req.session.cart.items.length > 0){
					
					_.each(req.session.cart.items,function(element,key){
						
						if(element.product.product_id == product.product_id ){
							if(compareOptions(element.product,product)){
								found = true;
								req.session.cart.items[key].quantity +=Number(quantity);
								countTotal();
							}else{
								found = true;
								req.session.cart.items.push({product: product,quantity:Number(quantity),itemId:new mongoose.Types.ObjectId});
								countTotal();
							}
						}
					},this);
					if(!found){
						
						req.session.cart.items.push({product: product,quantity:Number(quantity),itemId:new mongoose.Types.ObjectId});
						countTotal();
					}
				}else{
					req.session.cart.items.push({product: product,quantity:Number(quantity),itemId:new mongoose.Types.ObjectId});
					countTotal();
				}

			}else{
				if(req.session.cart.items.length > 0){
					
					
					_.map(req.session.cart.items,function(element,key){
							if(found) {
								return element
							}
							if(element.product.product_id == product.product_id ){
								req.session.cart.items[key].quantity += Number(req.body.quantity);
								countTotal();
								found = true;
								return element;
							}else{
								return element;
							} 
					});
					if(!found) {
						req.session.cart.items.push({product: product,quantity:Number(req.body.quantity),itemId:new mongoose.Types.ObjectId});
						countTotal();
					}
							
				}else{
					req.session.cart.items = [{product: product,quantity:Number(req.body.quantity),itemId:new mongoose.Types.ObjectId}];
					countTotal();
				}
			}
				//console.log(req.session.cart.items);
				
		}
		this.delProduct = function(itemId){
			var index;
			_.each(req.session.cart.items,function(item,key){
				if(item.itemId == itemId) index = key;
			});
			req.session.cart.items.splice(index,1);
			countTotal();
		}
		this.getTotal = function (){
			return req.session.cart.total;
		}
		this.getItemsAmount = function(){
			var amount = 0;
			_.each(req.session.cart.items,function(item){
				amount += item.quantity;
			});
			return amount
		}
		function countTotal(){
			var total = 0;
			_.each(req.session.cart.items,function(item){
				console.log(item);
				if(item.product.options != undefined && item.product.options>0){
					total += item.product.price * item.quantity;
					_.each(item.product.options,function(option){
						if(_.has(option,'price')) total += option.price
					});

				}else{
					total += Number(item.product.price) * Number(item.quantity);
				}
			});
			req.session.cart.total = total;
		}
		function organizeOptions(options){
			
			var newOption = [];
			 function toObject(Massiv){
			 		
			 	Massiv.forEach(function(element){
			 		if (element instanceof Array) toObject(element)
			 			else newOption.push(element);
			 	})
			 	return
			 }
			 toObject(options);
			 return newOption;
			
		}
		this.getCart = function(){
			return req.session.cart;
		}
		this.clearCart = function(){
			delete(req.session.cart);
		}
		
	}

	req.cart = new Cart();
	res.locals.cart.count = req.cart.getItemsAmount();
	next();
}

module.exports = setCart;