

$(function() {
	log("Loaded");
	
	paper.setup($("#canvas")[0]);
	
	var x = p($("#canvas")[0], function() {
	  this.onMouseDown = function(event) {
	    var point = new paper.Point(10, 10)
	    var circle = new paper.Path.Circle(event.point.add(point), 5);
	    
	  	log("HERE", event.point)
	  	
	    circle.fillColor = 'red';
	  };
	});
	
	var controls = $("#controls a");
	controls.click(function() {
		controls.removeClass("active");
		$(this).addClass("active");
	});
	controls.first().click();
	
	
	window.project = new ProjectModel();
	window.pview = new ProjectView({ 
		model: project,
		el: $("#layer_container") 
	});
});



var count = 0;
function p(element, arg) {
	
	var scope = new paper.PaperScope('jPaperScope-' + (count++));
	var view = scope.view;
	var tool = scope.tool = new paper.Tool(scope);
	var res = {};
	paper = scope;
	new paper.Project();
	new paper.View(element).activate();
	
	with (scope) {
		(function() {
    		var onEditOptions, onSelect, onDeselect, onReselect, onMouseDown,
    			onMouseUp, onMouseDrag, onMouseMove, onKeyDown, onKeyUp,
    			onFrame, onResize,
    			handlers = [ 'onEditOptions', 'onSelect', 'onDeselect',
    				'onReselect', 'onMouseDown', 'onMouseUp', 'onMouseDrag',
    				'onMouseMove', 'onKeyDown', 'onKeyUp'];
    				
    		arg.call(res);
    		if (tool) {
    			$.each(handlers, function(i, key) {
    				tool[key] = res[key];
    			});
    		}
    		if (view) {
    			view.onResize = onResize;
    			if (onFrame) {
    				view.setOnFrame(onFrame);
    			} else {
    				view.draw();
    			}
    		}
    	}).call(scope);
	}


}