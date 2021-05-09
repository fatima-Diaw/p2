// JavaScript Document
var donneesSenMoney = '{"tel1": {"numero": "774472171", "solde": 10000, "code": "2020"},"tel2": {"numero": "778496405", "solde": 20000, "code": "2010"},"tel3": {"numero": "772934418", "solde": 30000, "code": "2000"},"tel4": {"numero": "772502482", "solde": 40000, "code": "1990"},"tel5": {"numero": "776599290", "solde": 50000, "code": "1980"}}';

function menuss(){
	var choix=window.prompt("------MENU SENMONEY------\n"+
	"Bindall numero bigua tane\n"+
	"1: Niatta mo dess ci sa gakou \n"+
	"2: Yonne Khaliss\n"+
	"3: fayy say facture\n"+
	"4: Options\n");
	
    switch(choix)
	{
		case "1" : showSoldes();

		break;
		
		case "2": showTransfers();
		
		break;
		
		case "3" :showPayments();
		break;

		case "4": showOptions();

		break;
		
		default :menuss();
	}
}
      //Vérification du  numéro
   function checkNumbers(num, obj){
    for(tel in obj){
        if(obj[tel].numero == num)
            return obj[tel];
    }
    return null;
 
}
   //Affichage du solde 
   function showSoldes(){
    var numero = document.getElementById("numero").value; 
    //alert(numero);
    var donneesSenMoneyJs = JSON.parse(donneesSenMoney);
    //alert(donneesSenMoneyJs);
    obj = checkNumbers(numero, donneesSenMoneyJs);
    //alert(obj.code);
	if(obj == null){//Le numero ne se trouve pas dans donneesSenMoney
		alert("sa numero menou niouko guisss");	
	}else{//Le numero se trouve dans donneesSenMoney
		var code = window.prompt("dougualal sa bandargua");
        if(code == obj.code){
			var choix=window.confirm("Sa khaliss mougui toll si "+obj.solde+
			"\n dagua beug delou si menu bi ?");
			if(choix==true){
				menuss();
			}	
		}else{
			var choix=window.confirm("sa mandargua bakhoul\n Dagua beug delou si menu bi ?");
			if(choix==true){
				menus();
			}
		}
	}

}
      //Transfert d'argent
	 function showTransfers(){
		var numero = document.getElementById("numero").value; 
		//alert(numero);
		var donneesSenMoneyJs = JSON.parse(donneesSenMoney);
		//alert(donneesSenMoneyJs);
		obj = checkNumbers(numero, donneesSenMoneyJs);
		//alert(obj.code);
		if(obj == null){//Le numero ne se trouve pas dans donneesSenMoney
			alert("sa numero menou niouko guiss");	
		}else{//Le numero se trouve dans donneesSenMoney
            var mont = window.prompt("Bindall niatta gue beugu yonne si khaliss");
            var numero = window.prompt("bindall numero bigu beugu yonne khaliss");
            var code = window.prompt("bindallsa mandargua");
			if(code == obj.code){
				obj.solde = obj.solde - mont;
				var choix=window.confirm("sa yone égu na"+
                "\n Dagua beugu delou si menu bi ?");
				if(choix==true){
					menuss();
				}	
			}else{
				var choix=window.confirm("sa mandargua bakhoul\n Dagua beugu delou si menu bi ?");
				if(choix==true){
					menuss();
				}
			}
		}
	}
            //Options
               function showOptions()
		        {
				var numero = document.getElementById("numero").value; 
				//alert(numero);
				var donneesSenMoneyJs = JSON.parse(donneesSenMoney);
				//alert(donneesSenMoneyJs);
				obj = checkNumbers(numero, donneesSenMoneyJs);
				//alert(obj.code);
				if(obj == null){//Le numero ne se trouve pas dans donneesSenMoney
					alert("sa numero menou niouko guiss");	
				}else{//Le numero se trouve dans donneesSenMoney
					   var choix = window.prompt("Dagua beugu soppi sa mandargua  wala \n"+
						"kholl sama diouromi yonne you moudj yi \n"+
						"1: soppi sa mandarguabou  bi\n"+
						"2: kholl sama diouromi yonne you moudj yi");

						switch(choix)
						{
							case "1" : showModifs();
					              //Changement Code
						      	function  showModifs()
								  {
									var newcode;
								    var code = window.prompt("yagui si yonnou soppi sa mandargua\n"+
									"bindall sa mandargua bi");
									if(code == obj.code){
									var newcode = window.prompt("bindallsa mandargua bou bess bi");
									obj.code = newcode;
										var choix=window.confirm("Sa mandargua soopi nagn ko"+
			                                  "\n Dagua beugu delou si menu bi?");

													if(choix==true){
														menuss();
													}	
									}
									   
									else{
										var choix=window.confirm("sa mandargua bakhoul\n Dagua beugu delou si menu bi ?");
										if(choix==true){
											menuss();
										}
									}
								  }
							break;
							
							case "2": showTransactions();
							   //Consulter les transactions
							  function showTransactions()
								{
									newcode=window.prompt("Guirr diott sa diouromii yonne you moudjyii  bindall sa mandargua");
									if(newcode==obj.code){
										var choix=window.confirm("sa diouromii yonneyou moudji niougui ni\n"+
											  " Deposit : --1000.00-- \n"+
											  " Transfer : --2000.00--\n"+
											  " Withdrawal : --500.00--\n"+
											  " Transfer : --1000.00--\n"+
											  " Payment : --5000.00-- ");
									 }
								   else
							        {
								    var choix=window.confirm(" sa mandargua bakhoul\n Dagua beugu delou si menu bi ?");
								     if(choix==true){
								      menuss();
						             }
								  }  
							} 
								break;		
						}
					}	
				}				

function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xhttp) {
  document.getElementById("demo").innerHTML =
  xhttp.responseText;
}