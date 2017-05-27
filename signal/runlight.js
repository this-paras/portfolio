// JavaScript Document

var tm = 0;
function tl(){
	if(tm>300){
		tm = 1;
	}else{
		tm++;
	}
	document.getElementById('val').innerHTML = tm;

	if((tm>0)&&(tm<=45)){
		document.getElementById('ag').classList = "cir green";
		document.getElementById('agr').classList = "cir green";
		document.getElementById('br').classList = "cir red";
		document.getElementById('cr').classList = "cir red";
		document.getElementById('dr').classList = "cir red";
		document.getElementById('dy').classList = "cir";
	}

	if((tm>45)&&(tm<=50)){
		if(tm%2==0){
			document.getElementById('agr').classList = "cir";
		}else{
			document.getElementById('agr').classList = "cir green";
		}
	}

	if((tm>50)&&(tm<=95)){
		document.getElementById('bg').classList = "cir green";
		document.getElementById('bgr').classList = "cir";
		document.getElementById('br').classList = "cir";
		document.getElementById('cr').classList = "cir red";
		document.getElementById('dr').classList = "cir red";
	}

	if((tm>95)&&(tm<=100)){
		document.getElementById('ay').classList = "cir yellow";
		document.getElementById('ag').classList = "cir";
		document.getElementById('br').classList = "cir";
		document.getElementById('bg').classList = "cir green";
	}

	if((tm>=100)&&(tm<=145)){
		document.getElementById('ar').classList = "cir red";
		document.getElementById('ay').classList = "cir";
		document.getElementById('bgr').classList = "cir green";
	}

	if((tm>145)&&(tm<=150)){
		document.getElementById('bgr').classList = "cir";
		document.getElementById('by').classList = "cir yellow";
		document.getElementById('bg').classList = "cir";
	}

	if((tm>150)&&(tm<=195)){
		document.getElementById('bgr').classList = "cir";
		document.getElementById('br').classList = "cir red";
		document.getElementById('by').classList = "cir";
		document.getElementById('cg').classList = "cir green";
		document.getElementById('cgr').classList = "cir green";
		document.getElementById('cr').classList = "cir";
	}

	if((tm>195)&&(tm<=200)){
		if(tm%2==0){
			document.getElementById('cgr').classList = "cir";
		}else{
			document.getElementById('cgr').classList = "cir green";

		}
	}	
	
	if((tm>200)&&(tm<=245)){
		document.getElementById('dr').classList = "cir";
		document.getElementById('dg').classList = "cir green";

	}
	
	if((tm>245)&&(tm<=250)){
		document.getElementById('cy').classList = "cir yellow";
		document.getElementById('cg').classList = "cir";
	}
	
	if((tm>250)&&(tm<=295)){
		document.getElementById('cr').classList = "cir red";
		document.getElementById('cy').classList = "cir";
		document.getElementById('dgr').classList = "cir green";
	}
	
	if((tm>295)&&(tm<=300)){
		document.getElementById('dy').classList = "cir yellow";
		document.getElementById('dgr').classList = "cir";
		document.getElementById('dg').classList = "cir";
	}
}
	
		setInterval(tl,1000);