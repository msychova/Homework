function Machine(power) {
  this._power = power;
  this._enabled = false;
  var self = this;
  this.enable = function() { self._enabled = true; };
  this.disable = function() { self._enabled = false; };
}

function Fridge(power){
	Machine.apply(this, arguments);
	
	var food = [];
	var maxQuantity = power/100;
	
	this.addFood = function(item){
		
		if (!this._enabled) {
			alert('Turn on the device!');
			return;
		}
		
		let arr = item.split(', ');
		if ((arr.length + food.length) <= maxQuantity){
			food = food.concat(arr);
			console.log('Your food is added successfully! Congrats!');			
		}else{
			console.log('It\'s enough, bro! No free space!');
		}
		
	};
	
	this.takeFood = function(item){
		
		if (!this._enabled) {
			alert('Turn on the device!');
			return;
		}
		
		let arr = item.split(', ');
		let flag = false;
		
		for(let i = 0; i < food.length; i++){
			for(let j = 0; j < arr.length; j++){
				
				if(food[i] === arr[j]) {
					
					food.splice(i, 1);
					console.log('You took ' + arr[j]);
					flag = true;
			
				}
			}
		}

		if (!flag) console.log('You don\'t have this product');
		
	};
	
	this.getFood = function(){
		
		let b = food.slice();
		return b;
	};
	
	this.run = function() {
		if (!this._enabled) {
			alert('Enable the device!');
			return;
		} else {
			alert('Device works.');
		}
		
	}
		
}

var fridge = new Fridge(500);