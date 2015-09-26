var $canvasText;
var canvas;
var printText;
var $userText="";


//Allow user to add text to canvas
$("#submit").click(function(){
	//Put value of textarea into paragraph
  $userText = $("#inputText").val();
  $("#outputText").append($userText);
	//Add to canvas
	$canvasText = $("#outputText").html();
	canvas = new fabric.Canvas('poetryCanvas');
	printText = new fabric.Text($canvasText, { left: 100, top: 100 });
	canvas.add(printText);
	//Hide form, show new button
	$("#form").hide();
	$("#addNew").css("display","block");
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