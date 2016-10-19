





var app = app || {};

app.main = (function() {
	
	var teams = [],	
		filters = {};	
		
		var button = $('.all-teams input[type=clicked]');
	
	function attachEvents() {
		
	
		$(".all-teams.page").hide();

		
		$(".enter-btn").click(function(e){
			e.preventDefault();
			window.location.hash = '#viz';
		});
		$(".back").click(function(e){
			e.preventDefault();
			window.location.hash = '#';
		});

		$(".back").click(function(){
    	$(".all-teams.page").fadeOut(1000);
		});


		$(".enter-btn").click(function(){
    	$(".all-teams.page").fadeIn(1000);
		});


		 

	
		
	}



	function loadData() {
		$.getJSON( "race_results.json", function(data) {
			
			teams = data;

			generateAllteamsHTML(teams);

			$(window).trigger('hashchange');
		
		});
	}

	
	function render(url) {

		var temp = url.split('/')[0];



		var	map = {
	
			'': function() {
				renderEnterPage();
				console.log('enter');
			},

			'#viz': function() {
				console.log('viz');
				$('.enter').removeClass('visible');
				renderTeamsPage(teams);
			}
		};


		if(map[temp]){
			map[temp]();
		}
		
		else {
			renderErrorPage();
		}
	}

	
	function generateAllteamsHTML(data) {

		var list = $('.all-teams .teams-list');

		var source = $("#teams-template").html();
	
		var template = Handlebars.compile(source);
		list.append (template(data));



		
	}

	function renderEnterPage(){
		var page = $('.enter');
		page.addClass('visible');
	}

	function renderTeamsPage(data){
		var page = $('.all-teams');
		page.addClass('visible');

		
		for(var i = 0;i<data.length;i++){
			if(data[i].asianpacificislander>1){
				console.log(data[i].rank);
			}
		}


		$("#c1").click(function() {
   		 $(".teams-list > li").css("background","#27662f").css("opacity", "0.2");
          $("[data-index='3']").css("background","white").css("opacity", "0.9");
          $("[data-index='6']").css("background","white").css("opacity", "0.9");;
          $("[data-index='7']").css("background","white").css("opacity", "0.9");;
          $("[data-index='8']").css("background","white").css("opacity", "0.9");;
          $("[data-index='12']").css("background","white").css("opacity", "0.9");;
          $("[data-index='21']").css("background","white").css("opacity", "0.9");;
          $("[data-index='24']").css("background","white").css("opacity", "0.9");;
          $("[data-index='26']").css("background","white").css("opacity", "0.9");;
          $("[data-index='29']").css("background","white").css("opacity", "0.9");;
          $("[data-index='32']").css("background","white").css("opacity", "0.9");;
          });

		 $("#c2").click(function() {
   		 $(".teams-list > li").css("background","#27662f").css("opacity", "0.2");
   		 $("[data-index='1']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='2']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='4']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='5']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='10']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='11']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='14']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='16']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='17']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='18']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='20']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='25']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='27']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='28']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='30']").css("background","white").css("opacity", "0.9");
   		});

   		 $("#b2").click(function() {
   		 $(".teams-list > li").css("background","#27662f").css("opacity", "0.2");
   		 $("[data-index='3']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='6']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='7']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='8']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='12']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='13']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='24']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='26']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='32']").css("background","white").css("opacity", "0.9");
   		 });

   		 $("#b1").click(function() {
   		 $(".teams-list > li").css("background","#27662f").css("opacity", "0.2");
   		 $("[data-index='1']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='2']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='4']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='5']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='9']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='10']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='11']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='14']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='15']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='17']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='18']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='20']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='22']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='25']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='27']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='28']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='29']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='30']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='31']").css("background","white").css("opacity", "0.9");
   		 });


   		 $("#h1").click(function() {
   		 $(".teams-list > li").css("background","#27662f").css("opacity", "0.2");
   		 $("[data-index='3']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='5']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='13']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='16']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='30']").css("background","white").css("opacity", "0.9");
   		 });

   		 $("#h2").click(function() {
   		 $(".teams-list > li").css("background","#27662f").css("opacity", "0.2");
   		 $("[data-index='1']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='2']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='4']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='6']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='7']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='8']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='9']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='10']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='11']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='12']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='14']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='15']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='17']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='18']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='19']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='20']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='21']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='22']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='23']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='24']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='25']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='26']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='27']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='28']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='29']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='31']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='32']").css("background","white").css("opacity", "0.9");
   		 });

   		 $("#a1").click(function() {
   		 $(".teams-list > li").css("background","#27662f").css("opacity", "0.2");
   		 $("[data-index='2']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='7']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='12']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='15']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='19']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='26']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='27']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='29']").css("background","white").css("opacity", "0.9");
   		 });

   		 $("#a2").click(function() {
   		 $(".teams-list > li").css("background","#27662f").css("opacity", "0.2");
   		 $("[data-index='1']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='3']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='4']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='5']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='6']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='8']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='9']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='10']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='11']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='13']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='14']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='16']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='17']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='18']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='20']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='21']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='22']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='23']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='24']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='25']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='28']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='30']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='31']").css("background","white").css("opacity", "0.9");
   		 $("[data-index='32']").css("background","white").css("opacity", "0.9");
   		 });



		// $("#c2").click(function() {
  //  		 $(".teams-list > li").css("background","#27662f");
  //  		 $("[data-index='7']").css("background","white");
  //  		 });


//i know this works for sorting. 
		// $("#c1").click(function() {
  //  		//Now just reference this button and change CSS
  //  		$("[data-index='5']").css("background","white");
  //  		});



		

		var page = $('.all-teams'),
			allteams = $('.all-teams .teams-list > li');
	
		allteams.addClass('hidden');

		allteams.each(function () {

			var that = $(this);

			data.forEach(function (item) {
				if(that.data('index') == item.id){
					that.removeClass('hidden');
				}

			});
		});
	
		page.addClass('visible');
	}



    var appendData = function(data){

    	 $('.button2').animate({
    		scrollTop:$("#stat").offset().top + 'px'
        }, 'slow');


    };


	
	var init = function(){
		console.log('Initializing app.');
		attachEvents();
		loadData();

	
		$(window).on('hashchange', function(){
			render(decodeURI(window.location.hash));
		});
	};

	return {
		init: init
	};
})();


window.addEventListener('DOMContentLoaded', app.main.init);
