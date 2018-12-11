    $(window).scroll(function(){
    	var scrollTop = $(window).scrollTop();
        if(scrollTop > 350){
        	$('#navigation').css('opacity', '1');
        }                  
        else{
        	$('#navigation').css('opacity', '0');
        }

        var first =$("header").offset().top;
        var second = $("#archndesgin").offset().top;
        var third = $("#media").offset().top;
        var fourth = $("#partners").offset().top;
        var fifth = $("#contacts").offset().top;

        if(scrollTop+ 50 >= first && scrollTop < second -50){
            $("#b").addClass('highlight');
        }
	    else{
		    $("#b").removeClass('highlight');
	    }

	    if(scrollTop+50 >= second && scrollTop < third){
            $("#ar").addClass('highlight');
        }
	    else{
		    $("#ar").removeClass('highlight');
	    }

	    if(scrollTop >= third && scrollTop < fourth){
            $("#md").addClass('highlight');
        }
	    else{
		    $("#md").removeClass('highlight');
	    }

	    if(scrollTop >= fourth && scrollTop < fifth-500){
            $("#pt").addClass('highlight');
        }
	    else{
		    $("#pt").removeClass('highlight');
	    }

	    if(scrollTop + 500 >= fifth){
            $("#ct").addClass('highlight');
        }
	    else{
		    $("#ct").removeClass('highlight');
	    }
});