$(document).ready(function() {
	setTimeout(function() {
		$("#main").removeClass("is-loading");
	}, 300)
});
//https://s3-us-west-2.amazonaws.com/s.cdpn.io/336999/shinokubo_test.jpg

function switchVisible() {
            if (document.getElementById('Div1')) {

                if (document.getElementById('Div1').style.display == 'none') {
                    document.getElementById('Div1').style.display = 'block';
                    document.getElementById('Div2').style.display = 'none';
                }
                else {
                    document.getElementById('Div1').style.display = 'none';
                    document.getElementById('Div2').style.display = 'block';
                }
            }
}


var regex = new RegExp(
        '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
        '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
        '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    );
var regex_otp = new RegExp('[a-zA-Z0-9]{6}');
var otp,email;
    $('.email input').on('keyup', function(e) {
			if($("#text").text()=="Verify"){

	     $(this).parent().toggleClass('success', regex_otp.test($(this).val()));
			  otp=$(this).val();
			}else if($("#text").text()=="SEND OTP"){
		 $(this).parent().toggleClass('success', regex.test($(this).val()));
		 email=$(this).val();
			}
		});

$("#text").on("click",function(){
	if($("#text").text()=="Verify")
	{
		user ={
			"email" : email,
			"otp" : otp
		}
		otp+="otp";
		console.log("sent data:");
		console.log(user);
		user1 ={
			"email" : email,
			"otp" : otp
		}
		//console.log("Verifed-");
//this is the post request for verifying , I'm sending a json user as shown above
	$.post("http://localhost:3000/posts/",user,function(data,status,xhr){
		// Here data is what server will send,and user is what user has typed locally(both are json's with email and otp fields)
		console.log(data);
		if(user1.email==data.email&&user1.otp==data.otp)
		{
			console.log("WELCOME TO ZORO,"+data.email);
			//Uncomment below line after testing that things are working and above message is displayed in console
		 //window.location="index-1.html/register";
	}else
	 {alert("GET OUT");}
		console.log(data);//Displaying all data recieved from server
		//window.location="index-1.html/register";
	},"json");

	/*	console.log(result);
		if(result.status=="success")
		window.location="index-1.html/register";
		else {
			alert("OTP didn't match");
			location.reload();

		}*/
	//	});
}
	else{

	if($(".email").hasClass("success")){
		//call the api with email
		var user_email=$('.email input').val();
		console.log(user_email);
//Here call the api with email->This is the initial get request with email
		$.getJSON("https://jsonplaceholder.typicode.com/posts/1", function(result){
	//Add something like 		if(result.found){do this -> else dont do this} the below code is for when email is not found , if not found add something like window.location="index-1.html/login";
			console.log("data:");
			 console.log(JSON.stringify(result));

			console.log("Send otp now");
	$("#display-text").text("Please Enter OTP to continue:");
			var email_user = $('.email input').val();
			//console.log(email_user);
			 $('.email input').val('');
				$(".email").removeClass("success");
				 $(".email-input").attr("placeholder","X1234X");
		$("#text").text("Verify");
				 $(".email-input").attr("type","text")

		 });
	}
}
});



$(".start").on("click",function(){
	$(".desc-div").addClass("removed");
	$("#text").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>');
	setTimeout(function(){
$(".form-div").addClass("shown");

		$("#text").text("SEND OTP").fadeIn("slow");
	}, 2000)
});

/*
$(".start").on("click",function(){
	if($(".form-div").hasClass("shown"))
		{
	console.log("SEnd otp now");
	$("#display-text").text("Please Enter OTP to continue:");
	$("#emal-svg").addClass("hidden");
}});*/
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$(".login-btn").on("click",function(){
	 window.location="index-1.html";
});
