// JavaScript Document

var power,value1,value2,symbol,dot;
function calc(val){
	switch(val){

		case '0': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value+=val;
			}
		break;
			
		case '1': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value+=val;
			}
		break;
			
		case '2': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value+=val;
			}
		break;
			
		case '3': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value+=val;
			}
		break;
			
		case '4': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value+=val;
			}
		break;
			
		case '5': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value+=val;
			}
		break;
			
		case '6': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value+=val;
			}
		break;
			
		case '7': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value+=val;
			}
		break;
			
		case '8': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value+=val;
			}
		break;
			
		case '9': 
			if((document.calculator.screen.value==0)|| (power==1)){
				document.calculator.screen.value=val;
				power=0;
			}else{
				document.calculator.screen.value +=val;
			}
		break;
			
		case 'add':
			value1=parseFloat(document.calculator.screen.value)
			power=1;
			symbol=1;
			dot=0;
				
		break;

		case 'subs':
			value1=parseFloat(document.calculator.screen.value)
			power=1;
			symbol=2;
			dot=0;
		break;
			
		case 'mul':
			value1=parseFloat(document.calculator.screen.value)
			power=1;
			symbol=3;
			dot=0;
			
		break;
			
		case 'divide':
			value1=parseFloat(document.calculator.screen.value)
			power=1;
			symbol=4;
			dot=0;
		break;
			
		case 'point':
			if(dot!=1){
				document.calculator.screen.value+=".";
				dot=1;
				
			}
			
			
		break;
			
		case 'equal':
			value2=parseFloat(document.calculator.screen.value)
			switch(symbol){
			
				case 1:
					document.calculator.screen.value=value1+value2;
				break;
					
				case 2:
					document.calculator.screen.value=value1-value2;
				break;
					
				case 3:
					document.calculator.screen.value=value1*value2;
				break;
					
				case 4:
					document.calculator.screen.value=value1/value2;
				break;
					
			} 
			dot=0;
		break;
	}
	
	
}