// JavaScript Document

	var xmlhttp;
	var optone, otptwo, otpthree, otpfour, ca, ap, po;
	var q, oa, ob, oc, od; // To Call 4 Options in BX.
	var myarr = []; //Array
	var i = 0;
	var num = 0;
	var val;
	var timerDiv;
	var countertime = 31;
	var optionbxa, optionbxb, optionbxc, optionbxd;
	var strt;
	var audipo;
	

function xmlprocess(){
	
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp =  new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.open("GET","kbc.xml",false);
	xmlhttp.send();
	xmldoc = xmlhttp.responseXML;
	question = xmldoc.getElementsByTagName("ques");
	optone = xmldoc.getElementsByTagName("opta");
	opttwo = xmldoc.getElementsByTagName("optb");
	optthree = xmldoc.getElementsByTagName("optc");
	optfour = xmldoc.getElementsByTagName("optd");
	corrans = xmldoc.getElementsByTagName("ca");


	randomProcess();
}

	

function randomProcess(){
	
	for(i=0;i<10;i++){
			
			var status = "success";
			val = Math.round(Math.random()*question.length);
			myarr[i]=val
			for(var j=0;j<i;j++){
				if(val==myarr[j]){
					status = "failure";
					break;
				}
			}
			
			if(status == "success"){
				myarr[i] = val;
			}else{
				i--;
			}
		}
	para();
	disp();
	
}
	
	function disp(){
	
	
	var prizemoney = ["7 crore","3 crore","1 crore","50,00,000","25,00,000","12,50,000","6,40,000","3,20,000","1,60,000","80,000","40,000","20,000","10,000","5,000"];
	
	var leftcon = document.createElement("div");
		leftcon.id = "leftcont";
		document.body.appendChild(leftcon); 

	var lifelane = document.createElement("div");
		lifelane.id = "lifeline";
		document.getElementById('leftcont').appendChild(lifelane);
	
	var lgo = document.createElement("div");
		lgo.id = "logo";
		document.getElementById('lifeline').appendChild(lgo);
	
	var lifeoptionfirst = document.createElement("div");
		lifeoptionfirst.className = "lifeopt";
		lifeoptionfirst.setAttribute("onClick","audiPoll()");
		document.getElementById('lifeline').appendChild(lifeoptionfirst);
	
	var lifeoptionsecond = document.createElement("div");
		lifeoptionsecond.className = "lifeopt";
		lifeoptionsecond.setAttribute("onClick","fiftyFifty()");
		document.getElementById('lifeline').appendChild(lifeoptionsecond);
	
	
	var lifeoptionthird = document.createElement("div");
		lifeoptionthird.className = "lifeopt";
		lifeoptionthird.setAttribute("onClick","phoneAFri()");
		document.getElementById('lifeline').appendChild(lifeoptionthird);
	
	var question = document.createElement("div");
		question.id = "quest";
		question.innerHTML = q;
		document.getElementById('leftcont').appendChild(question);
	
	var fouroptions = document.createElement("div");
		fouroptions.id = "options";
		document.getElementById('leftcont').appendChild(fouroptions);
	
	var optionbxa = document.createElement("div");
		optionbxa.id = "opbxa";
		optionbxa.className = "optbx";
		optionbxa.innerHTML = oa;
		optionbxa.setAttribute("onClick","press(1)");
		document.getElementById('options').appendChild(optionbxa);
		
	var optionbxb = document.createElement("div");
		optionbxb.id = "opbxb";
		optionbxb.className = "optbx";
		optionbxb.setAttribute("onClick","press(2)");
		optionbxb.innerHTML = ob;
		document.getElementById('options').appendChild(optionbxb);
	
	var optionbxc = document.createElement("div");
		optionbxc.id = "opbxc";
		optionbxc.className = "optbx";
		optionbxc.setAttribute("onClick","press(3)");
		optionbxc.innerHTML = oc;
		document.getElementById('options').appendChild(optionbxc);

	var optionbxd = document.createElement("div");
		optionbxd.id = "opbxd";
		optionbxd.className = "optbx";
		optionbxd.setAttribute("onClick","press(4)");
		optionbxd.innerHTML = od;
		document.getElementById('options').appendChild(optionbxd);
	
	var prizelist = document.createElement("div");
		prizelist.id = "przlist";
		document.body.appendChild(prizelist);
	
	
	for(var i=0;i<prizemoney.length;i++){
		var prizemny = document.createElement("div");
		prizemny.className = "prize";
		prizemny.innerHTML = prizemoney[i];	
		document.getElementById('przlist').appendChild(prizemny);
		
	}
		
		
		
}


function press(aa){
	if(ca==aa){
		num++;
		
		alert("Correct Ans");
		para();
		arc();
	}else{
		alert("Wrong Ans");
	}
}	

function para(){
	
	 q  = question[myarr[num]].childNodes[0].nodeValue;
	 oa = optone[myarr[num]].childNodes[0].nodeValue;
	 ob = opttwo[myarr[num]].childNodes[0].nodeValue;
	 oc = optthree[myarr[num]].childNodes[0].nodeValue;
	 od = optfour[myarr[num]].childNodes[0].nodeValue;
	 ca = corrans[myarr[num]].childNodes[0].nodeValue;
}

function arc(){
	document.getElementById('quest').innerHTML = q;
	document.getElementById('opbxa').innerHTML = oa;
	document.getElementById('opbxb').innerHTML = ob;
	document.getElementById('opbxc').innerHTML = oc;
	document.getElementById('opbxd').innerHTML = od;
}

function phoneAFri(){
	
	strt = document.createElement("button");
	strt.id = "strtbtn";
	strt.setAttribute("onClick","startClock()");
	strt.innerHTML = "Start";
	document.body.appendChild(strt);
	
	var timerDiv = document.createElement("div");
	timerDiv.id = "timr";
	document.body.appendChild(timerDiv);
	var spn = document.createElement("span");
	spn.id = "cnt";
	spn.style.position = "absolute";
	spn.innerHTML = "30";
	document.body.appendChild(spn);
	
}

function startClock(){
	po = setInterval(countDown,500);
	countDown();
}

function countDown(){
	if(countertime<1){
		countertime=31;
	}else{
		countertime--;
	}
	document.getElementById('timr').style.transform = "rotate(-"+(countertime*12)+"deg)";
	document.getElementById('cnt').innerHTML = countertime;
	if(countertime>30){
		
		timrRemove();
	}
}

function timrRemove(){
	document.getElementById('timr').style.display = "none";
	document.getElementById('cnt').style.display = 	"none";
	document.getElementById('strtbtn').style.display = 	"none";
	clearInterval(po);

}

function fiftyFifty (){
	var	randomNumber = ca;
	while(ca==randomNumber){
		
	randomNumber = Math.round(Math.random()*3+1);
	
	}
	
	if((ca!=1)&&(randomNumber!=1)){
	document.getElementById('opbxa').innerHTML = "";
	
	}	
	
	
	if((ca!=2)&&(randomNumber!=2)){
	document.getElementById('opbxb').innerHTML = "";
	
	}
	
	if((ca!=3)&&(randomNumber!=3)){
	document.getElementById('opbxc').innerHTML = "";
	
	}
	
	if((ca!=4)&&(randomNumber!=4)){
	document.getElementById('opbxd').innerHTML = "";
	
	}
	
}





function audiPoll(){
/*	alert("This Feature is Not Active Yet");
*/	var audipo = document.createElement("div");
	audipo.id = "audipollmain";
	audipo.classList = "animated fadeInDown";
	document.body.appendChild(audipo);
	
	
	
	var forA = document.createElement("span");
	forA.id = "percA";
	forA.className = "smoothanimate";
	document.getElementById('audipollmain').appendChild(forA);
	
	var forB = document.createElement("span");
	forB.id = "percB";
	forB.className = "smoothanimate";
	document.getElementById('audipollmain').appendChild(forB);
	
	var forC = document.createElement("span");
	forC.id = "percC";
	forC.className = "smoothanimate";
	document.getElementById('audipollmain').appendChild(forC);
	
	var forD = document.createElement("span");
	forD.id = "percD";
	forD.className = "smoothanimate";
	document.getElementById('audipollmain').appendChild(forD);
	
	var aBox = document.createElement("div");
	aBox.id = "boxa";
	aBox.className = "abcdbox";
	aBox.innerHTML = "A";
	document.getElementById('audipollmain').appendChild(aBox);
	
	var bBox = document.createElement("div");
	bBox.id = "boxb";
	bBox.className = "abcdbox";
	bBox.innerHTML = "B";
	document.getElementById('audipollmain').appendChild(bBox);
	
	var cBox = document.createElement("div");
	cBox.id = "boxc";
	cBox.className = "abcdbox";
	cBox.innerHTML = "C";
	document.getElementById('audipollmain').appendChild(cBox);
	
	
	var dBox = document.createElement("div");
	dBox.id = "boxd";
	dBox.className = "abcdbox";
	dBox.innerHTML = "D";
	document.getElementById('audipollmain').appendChild(dBox);
	
	
	/*var percentNum = document.createElement("span");
	percentNum.id = "perA";
	percentNum.className = "prA";
	percentNum.innerHTML = "100%";
	document.getElementById('')*/
	
	
}


/*	var arr = [];
		
		for(i=0;i<10;i++){
			
			var status = "success";
			val = Math.round(Math.random()*100);
			arr[i]=val
			for(j=0;j<i;j++){
				if(val==arr[j]){
					status = "failure";
					break;
				}
			}
			
			if(status == "success"){
				arr[i] = val;
			}else{
				i--;
			}
		}
		
		document.write(arr);*/





