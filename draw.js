var canvas;
var printText;
var $userText;
var drawColor;

//Establish canvas
var canvas = new fabric.Canvas('poetryCanvas', {
		isDrawingMode: true,
		height: 320,
		width: 320
  });
canvas.freeDrawingBrush.width = 10;

//Allow user to add text to canvas
$("#submit").click(function(){
	//Put value of textarea into paragraph
  $userText = $("#inputText").val();
	
	//Add to canvas
	printText = new fabric.Text($userText, { 
		left: 10, 
		top: 10,
		fontSize: 18
	});
	canvas.add(printText);
	
	//Hide form, show new button
	$("#form").hide();
	$("#poetryCanvas").css("display", "block");
	$("#addNew").css("display","block");
	$(".controls").css("display","block")
	});

//Color selection
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
	$(this).siblings().removeClass("selectedColor");
  //Select clicked element
  $(this).addClass("selectedColor")
  drawColor = $(".selectedColor").css("background-color");
	//Set draw color
	canvas.freeDrawingBrush.color = drawColor;
});

//Save image
$("#saveCanvas").click(function(){
    canvas.isDrawingMode = false;
    if(!window.localStorage){alert("This function is not supported by your browser."); return;}
    // to PNG
    window.open(canvas.toDataURL('png'));
});

//Clear fields to allow new text. Also clear canvas.
$("#addNew").click(function(){
	$("#outputText").empty();
	canvas.clear().renderAll();
	$("#form").show();
	$("#inputText").val("");
	$("#addNew").css("display","none");
	});






