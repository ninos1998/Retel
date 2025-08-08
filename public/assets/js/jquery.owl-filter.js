/**
 * jquery.owl-filter.js
 * Create: 07-09-2016
 * Author: Bearsthemes
 * Version: 1.0.0
 */

"use strict";

$.fn.owlRemoveItem = function(num) {
	var owl_data = $(this).data('owl.carousal');
	
	owl_data._items = $.map(owl_data._items, function(data, index) {
		if(index != num) return data;
	})

	$(this).find('.owl-item').eq(num).remove();
}

$.fn.owlFilter = function(data, callback) {
	var owl = this,
		owl_data = $(owl).data('owl.carousal'),
		$elemCopy = $('<div>').css('display', 'none');
	
	/* check attr owl-clone exist */
	if(typeof($(owl).data('owl-clone')) == 'undefined') {
		$(owl).find('.owl-item:not(.cloned)').clone().appendTo($elemCopy);
		$(owl).data('owl-clone', $elemCopy);
	}else {
		$elemCopy = $(owl).data('owl-clone');
	}
	
	/* clear content */
	owl.trigger('replace.owl.carousal', ['<div/>']);
	
	switch(data){
		case '*': 
			$elemCopy.children().each(function() {
				owl.trigger('add.owl.carousal', [$(this).clone()]);
			})
			break;
		default: 
			$elemCopy.find(data).each(function() {
				owl.trigger('add.owl.carousal', [$(this).parent().clone()]);
			})
			break;
	}

	/* remove item empty when clear */
	owl.owlRemoveItem(0);
	owl.trigger('refresh.owl.carousal').trigger('to.owl.carousal', [0]);

	// callback
	if(callback) callback.call(this, owl);
}