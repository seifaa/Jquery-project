function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}






$("a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})












$(document).ready(function()
{
                  
      $("#acc div:first").css("display","block");
    $("#acc h3").click(function(){
        
        $(this).next().slideToggle(500);
         $("#acc div").not($(this).next()).slideUp(500);
        
    });
                  
                  
                  
                  
                  
                  
                  
});




function countdown(){
                var dateNOW = new Date();
                
                var eventDate = new Date(2023, 12, 17);
                
				var currentTime =dateNOW.getTime();
				var eventTime = eventDate.getTime();

				var remindTIME = eventTime - currentTime;

				var s = Math.floor(remindTIME / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
                var d = Math.floor(h / 24)-30 ;
                

                h %= 24;

				m %= 60;
                s %= 60;
            
                if(s<10){
                    s = "0" + s
                }
                else{
                    s =  s

                }
                if(m<10){
                    m = "0" + m
                }
                else{
                    m =  m 
                    

                }
                if(h<10){
                    h = "0" + h
                
                }
                else {
                    h = h
                    // console.log(h) ليه هنا مش بيطبع h
                }
                // console.log(h) هنا بيطبعها وبيعطيني 04







                

                

                
                document.getElementById("days").innerHTML = `<h3>${d} D</h3>`;
                document.getElementById("hours").innerHTML=`<h3>${h} h</h3>`
                document.getElementById("minutes").innerHTML = `<h3>${m} m</h3>`;
                document.getElementById("seconds").innerHTML = `<h3>${s} s</h3>`;



				


				setTimeout(countdown, 1000);
			}

			countdown();





$(function(){
    
    "use strick";
    var max =100;
    
    $("textarea").keyup(function(){
        
        var length=$(this).val().length;
        var textreacontent = max - length;
        
        console.log(textreacontent)
        
        if(textreacontent<=0)
            {
                 $("#char").text("your available character finished");
                
            }
        else{
        
        $("#char").text(textreacontent);
        }
        
    });

    
});

// $(function(){let x= 5; console.log(x+"egypt"+55)})
// let l= Number(document.getElementById("l").innerHTML) 
// let l1= Number(document.getElementById("l").innerHTML) 
// console.log(l+l1)
// function gg (dj,j){
// console.log(dj)

// if(dj==undefined){
//     dj = "ahmed"
//     console.log(dj)
// }

// if(j==undefined){
//     j = "seif"
//     console.log(j)
// }
// else if(j==undefined){
//     j = "mohamed"
//     console.log(j)
// }

// }
// gg();

// let x 
// console.log(1+undefined);
// console.log(3 + null); //3+0 =3
// let x = 22 
// x=x+4
// console.log(x)
// x+=1
// x =x +2
// console.log(x)