var $canvasText;
var canvas;
var printText;
var $userText="";
var canvas = new fabric.Canvas('poetryCanvas', {
    isDrawingMode: true
		ctx.lineWidth: 15;
  });

//Allow user to add text to canvas
$("#submit").click(function(){
	//Put value of textarea into paragraph
  $userText = $("#inputText").val();
  $("#outputText").append($userText);
	//Add to canvas
	$canvasText = $("#outputText").html();
	printText = new fabric.Text($canvasText, { left: 100, top: 100 });
	canvas.add(printText);
	//Hide form, show new button
	$("#form").hide();
	$("#addNew").css("display","block");
	
  isDrawingMode: true;


	poetryCanvas.freeDrawingBrush.color = "purple";
	poetryCanvas.freeDrawingBrush.width = 10;

});

//Clear fields to allow new text. Also clear canvas.
$("#addNew").click(function(){
	$userText = "";
	$("#outputText").empty();
	canvas.clear().renderAll();
	$("#form").show();
	$("#inputText").val("");
//	$("#outputText").empty();
	$("#addNew").css("display","none");
});