
$(document).ready(function(){

    // document.querySelector("h1").style.color="red";
    // $("h1").css("color","blue");
    
    // $("#pink").addClass("open");
    
    
    // $("#pink").toggleClass("open");
    
    // $("h1").click(()=>{
    //     $("p").fadeIn();
     
    //     $("a").text("jeec");

        
    // });
    
    
    $(document).keypress(function(event){

        console.log(event.key);
        $("h1").text(event.key);

    });

    });
    
    $("h2").on("mouseover", function(){


        $("h2").css("color","purple");
        $("h2").css("font-size","4rem");



    });

    $("h3").before("<button>New befor </button>")
    $("h3").after("<button>New after</button>")

    $("h4").prepend("<button>prepend</button>")
    $("h4").append("<button>pospend</button>")

    $("button").on("click", function(){

        // $("h2").hide();
        // $("h2").show();  when css display none
        // $("h2").toggle();

        // $("h2").slideUp();
        // $("h2").slideDown();
        // $("h2").slideToggle(); 
        
        // $("h2").fadeOut();
        // $("h2").fadeIn();
        // $("h2").fadeToggle();

              
        
         // $("h2").animate({opacity:0.5});  // here only numeric value not color red accept ===>animate
        //  $("h2").animate({margin:"102px"}); 

        // $("h2").slideUp().slideDown().animate({opacity:0.5});  // stpe by step happened



       


        







    });