$(document).on("click",function(event){

			let c     = event.target.className;
			let parId = event.target.parentElement.id;
			let test  = c.substr(0,3);
			let index = c.slice(-1);

			let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
			let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

			let i,j;

			if(test==="col"){
				i = Number(parId);
				j = Number(index);

				//let ans=[];

				for (var k = 0; k < 8; k++) {

		            var x = i + X[k];
		            var y = j + Y[k];
		   			

		            if (x >= 1 && y >= 1 && x <= 8 && y <= 8 ){
		            	//ans.push({x,y});
		            	console.log("x = "+x+" "+"y = "+y);
		            	let p=String(x);
		            	let q=String(y);

		            	var a1=$("<p class=\'pp\'></div>").text(" X : "+p+","+" Y : "+q);
		            	
		       			$('.ans').append(a1);
		        	}
		    	}
		    	var a2=$("<p class=\'pp\'></div>").text(" Event ended. ");
		    	$('.ans').append(a2);

		    	console.log("Event ended");

			}
			else{
				alert("Please select a valid square");

			}
			setTimeout(function(){
    			window.location.reload(); 
			},1800);
	});