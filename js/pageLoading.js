
// type1:  equal blocks
function type1() {
	$("main").empty();
	$('<div class=combo>').appendTo('main').attr("id","A"+1);
	$('<div>').appendTo('#A1').attr("id","A"+2).addClass("combo comboDouble box");
	$('<div>').appendTo('#A1').attr("id","A"+3).addClass("combo comboDouble box");
	$('<div>').appendTo('main').attr("id","A"+4).addClass("comboRight box");
};
// type2:  left 2 elements right 1 element
function type2(count) {
	$( "main" ).empty();
	for(i=0;i<count;i++){
		$('<div>').appendTo('main').attr("id","B"+i).addClass("equals box");
	}
};
// type3:  one and one, different size
function type3(count) {
	$( "main" ).empty();
	var j=0;
	for(i=0;i<count;i++){
		if(j%2==1){
			$('<div>').appendTo('main').attr("id","C"+i).addClass("large box");
			i++;
			$('<div>').appendTo('main').attr("id","C"+i).addClass("small box");
		}else{
			$('<div>').appendTo('main').attr("id","C"+i).addClass("small box");
			i++;
			$('<div>').appendTo('main').attr("id","C"+i).addClass("large box");
		}
		j++;
	}
	initType3();
		
	
};
function initType3(){
	$('#C0').css("backgroundImage", "url('Fotos/Home/blog.jpg')").addClass("backgroundImg wrapper").on('click',function(e){ about(); }).append( "<p class='hidden'>About</p>" );
	$('#C1').css("backgroundImage", "url('Fotos/Home/yogaMatten.jpg')").addClass("backgroundImg wrapper").on('click',function(e){ }).append( "<p class='hidden'>Yoga</p>" );
	$('#C2').css("backgroundImage", "url('Fotos/Home/classicDance.jpg')").addClass("backgroundImg").on('click',function(e){  }).append( "<p class='hidden'>ClassicDance</p>");
	$('#C3').css("backgroundImage", "url('Fotos/Home/travel.jpg')").addClass("backgroundImg").on('click',function(e){}).append( "<p class='hidden'>Travel</p>" );
	$('#C4').css("backgroundImage", "url('Fotos/Home/food.jpg')").addClass("backgroundImg").on('click',function(e){ food(); }).append( "<p class='hidden'>Food</p>" );
	$('#C5').css("backgroundImage", "url('Fotos/Home/Zumba.jpg')").addClass("backgroundImg").on('click',function(e){ about(); }).append( "<p class='hidden'>LatinDance</p>" );
}

// type4:  small blocks
function type4(count) {
	$( "main" ).empty();
	for(i=0;i<count;i++){
			$('<div>').appendTo('main').attr("id","D"+i).addClass("small1 box");
	}
};
// type5: food
function type5(count) {
	$( "main" ).empty();
	$('<div>').appendTo('main').addClass("abstandSmall");
	$('<div>').appendTo('main').attr("id","D"+0).addClass("full box");
	$('<div>').appendTo('main').addClass("abstandLarge");
	$('<div>').appendTo('main').attr("id","D"+1).addClass("equals box");
	$('<div>').appendTo('main').attr("id","D"+2).addClass("equals box");
	$('<div>').appendTo('main').addClass("abstandLarge");
	for(i=3;i<count+3;i++){
		$('<div>').appendTo('main').attr("id","D"+i).addClass("small1 box");
	}
};
function home() {
	type3(6);
};
function about() {
	type2(8);
};
function food() {
	type5(8);
};
function dance() {
	type4(12);
};
function blog() {
	type1();
};
function init() {
	initHome();
};

/*loading text function
$(document).ready(function() {
    $("#lesen").click(function() {
        $.ajax({
            url : "helloworld.txt",
            dataType: "text",
            success : function (data) {
                $(".text").html(data);
            }
        });
    });
});*/