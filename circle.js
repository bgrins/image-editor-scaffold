var t = new Tool;
project.currentStyle = {
    fillColor: 'white',
    strokeColor: 'black'
};

var path;
function onMouseDrag(event) {
    // The radius is the distance between the position
    // where the user clicked and the current position
    // of the mouse.
    var radius = (event.downPoint - event.point).length;
    path = new Path.Circle(event.downPoint, radius);
    path.removeOnDrag();
};

