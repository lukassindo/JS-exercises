
$("span:even").css('color', 'red');
$("p").css('margin-left','20px');


var paragraphs = $('p');
paragraphs.each(function(index, element) {

    var button = '<button class="btn btn-primary" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)

});


$("button:even").css('margin-left', '20px');
$("button:odd").css('margin-left', '53px');

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});