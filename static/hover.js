$(window).on('resize load', function() {
    $('body').css({"padding-top": $(".navbar").height() + "px"});
});

<!--

// extreme thanks to stackoverflow.com/questions/12661124/
// device context of the canvas we use for the outlines
// initialized in myInit, used in myHover and myLeave
var hdc;

function byId(e){return document.getElementById(e);}

// takes a string that contains coords "228, 334, 102, 240"
// draws a line from each coord pair to the next 
// assumes starting point = ending point
function drawPoly(coordStr) 
{
    var mCoords = coordStr.split(',');
    var i, n;
    n = mCoords.length;

    hdc.beginPath();
    hdc.moveTo(mCoords[0], mCoords[1]);
    for (i=2; i < n; i += 2)
    {
	hdc.lineTo(mCoords[i], mCoords[i+1]);
    }

    hdc.lineTo(mCoords[0], mCoords[1]);
    hdc.stroke();

}

function myHover(element)
{
    var hoveredElement = element.getAttribute('coords');
    var coordStr = element.getAttribute('coords');
    // not finding out what type of area
    // we're assuming all the areas are poly
    
    drawPoly(coordStr);
    console.log(12);

}

function myLeave()
{
    var canvas = byId('myCanvas');
    hdc.clearRect(0, 0, canvas.width, canvas.height);
}

function myInit()
{
    //get target image
    
    var img = byId('haverfordMap');
    
    var x, y, w, h;
    // get position and width+height
    x = img.offsetLeft;
    y = img.offsetTop;
    w = img.clientWidth;
    h = img.clientHeight;

    console.log(x);
    console.log(y);
    console.log(w);
    console.log(h);

    //move the canvas so it's contained by the same parent as the image
    var imgParent = img.parentNode;
    var can = byId('myCanvas');
    imgParent.appendChild(can);

    // place the canvas in front of the image
    can.style.zIndex = 1;
    
    //position it over the image
    can.style.left = x+'px';
    can.style.top = y+'px';

    //make same size as the image
    can.setAttribute('width', w+'px');
    can.setAttribute('height', h+'px');

    //get its context
    hdc = can.getContext('2d');

    // set the 'default' values for the color/width of fill/stroke operations
    hdc.fillStyle = 'red';
    hdc.strokeStyle = 'red';
    hdc.lineWidth = 2;
    
}

-->
