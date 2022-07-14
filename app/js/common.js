$(function() {

	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".footer-toggle-mnu").click(function(e){
		e.preventDefault()
		$(this).toggleClass("on");
		$(".footer-main-mnu").slideToggle();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".main-footer .toggle-mnu").click(function(){
			$("html, body").animate({ scrollTop: $(document).height()}, "slow");
			return false;
	});

	$(".top").click(function(){
		$("html, body").animate({ scrollTop: 0}, "slow");
		return false;
	});

	$(".arrow-botton").click(function(){
		$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
		return false;
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	

	$(".section_4").waypoint(function(){

		$(".section_4 .card").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index);
		});

	}, {
		offset: "20%"
	});


	$(".section_5").waypoint(function(){

		$(".section_5 .tc-item").each(function(index){
			var ths = $(this);
			setTimeout(function(){
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg-" + index
				});
				ths.removeClass("").addClass("");
			}, 500*index);
		});

		this.destroy();

	}, {
		offset: "20%"
	});


	$(".section_6").waypoint(function(){

		$(".section_6 .team").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("team-off").addClass("team-on");
			}, 150*index);
		});

	}, {
		offset: "20%"
	});


	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed: 600
	});

	$(".homesect .section-head p, .homesect .section-head h2").animated("fadeInRight");

	$(".info-item-wrap").animated("zoomIn");

	$(".slider .slide").animated("rollIn");

	$(".homesect.section_8 .forms").animated("fadeInRight");
	$(".section_8.homesect .p").animated("fadeInLeft");


	$(".section_2").waypoint(function(){
		$(".s2-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.addClass("on");
			}, 150*index);
		});
	}, {
		offset: "35%"
	});

	$(".section_8").waypoint(function(){
		$(".s8-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.addClass("on");
			}, 150*index);
		});
	}, {
		offset: "20%"
	});

	$(".homesect .section-bottom .buttons").click(function(){
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

});
