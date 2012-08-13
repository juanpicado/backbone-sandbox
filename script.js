//var object = {};
//
//_.extend(object, Backbone.Events);
//
//object.on("alert", function(msg) {
//	//alert("Triggered " + msg);
//});
//
//object.trigger("alert", "an event");
console.log(Backbone);
var Photo = Backbone.Model.extend({
	defaults : {
		src : 'placeholder.jpg',
		title : 'an image placeholder',
		coordinates : [ 0, 0 ]
	},
	initialize : function() {
		this.on("change:src", function() {
			var src = this.get("src");
			console.log('Image source updated to ' + src);
		});
	},
	changeSrc : function(source) {
		this.set({
			src : source
		});
	}
});
var somePhoto = new Photo({
	src : "test.jpg",
	title : "testing"
});
somePhoto.changeSrc("magic.jpg");
console.log(somePhoto);
console.log(somePhoto.changeSrc('test'));
console.log(somePhoto.get('src'));
console.log(somePhoto.get('title'));