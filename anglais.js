// JavaScript Document
var donneesSenMoney = '{"tel1": {"numero": "774472171", "solde": 10000, "code": "2020"},"tel2": {"numero": "778496405", "solde": 20000, "code": "2010"},"tel3": {"numero": "772934418", "solde": 30000, "code": "2000"},"tel4": {"numero": "772502482", "solde": 40000, "code": "1990"},"tel5": {"numero": "776599290", "solde": 50000, "code": "1980"}}';

function menus(){
	var choix=window.prompt("------MENU SENMONEY------\n"+
	"Enter the number of the chosen service\n"+
	"1: My account balance\n"+
	"2: Money transfer\n"+
	"3: Bill payment\n"+
	"4: Options\n");
	
    switch(choix)
	{
		case "1" : showSolde();

		break;
		
		case "2": showTransfer();
		
		break;
		
		case "3" :showPayment();
		break;

		case "4": showOption();

		break;
		
		default :menus();
	}
}
      //Vérification du  numéro
   function checkNumber(num, obj){
    for(tel in obj){
        if(obj[tel].numero == num)
            return obj[tel];
    }
    return null;
 
}
   //Affichage du solde 
   function showSolde(){
    var numero = document.getElementById("numero").value; 
    //alert(numero);
    var donneesSenMoneyJs = JSON.parse(donneesSenMoney);
    //alert(donneesSenMoneyJs);
    obj = checkNumber(numero, donneesSenMoneyJs);
    //alert(obj.code);
	if(obj == null){//Le numero ne se trouve pas dans donneesSenMoney
		alert("Number not found in sen Money");	
	}else{//Le numero se trouve dans donneesSenMoney
		var code = window.prompt("Please enter the security code");
        if(code == obj.code){
			var choix=window.confirm("Your account balance is "+obj.solde+
			"\n Do you want to return to the menu ?");
			if(choix==true){
				menus();
			}	
		}else{
			var choix=window.confirm("Erone code\n Do you want to return to the menu ?");
			if(choix==true){
				menus();
			}
		}
	}

}
      //Transfert d'argent
	 function showTransfer(){
		var numero = document.getElementById("numero").value; 
		//alert(numero);
		var donneesSenMoneyJs = JSON.parse(donneesSenMoney);
		//alert(donneesSenMoneyJs);
		obj = checkNumber(numero, donneesSenMoneyJs);
		//alert(obj.code);
		if(obj == null){//Le numero ne se trouve pas dans donneesSenMoney
			alert("Number not found in sen Money");	
		}else{//Le numero se trouve dans donneesSenMoney
            var mont = window.prompt("Enter the amount you want to transfer");
            var numero = window.prompt("Enter the recipient's number");
            var code = window.prompt("Enter your secret code");
			if(code == obj.code){
				obj.solde = obj.solde - mont;
				var choix=window.confirm("Transfer completed "+
                "\n Do you want to return to the menu ?");
				if(choix==true){
					menus();
				}	
			}else{
				var choix=window.confirm("Erone code\n Do you want to return to the menu ?");
				if(choix==true){
					menus();
				}
			}
		}
	}
            //Options
               function showOption()
		        {
				var numero = document.getElementById("numero").value; 
				//alert(numero);
				var donneesSenMoneyJs = JSON.parse(donneesSenMoney);
				//alert(donneesSenMoneyJs);
				obj = checkNumber(numero, donneesSenMoneyJs);
				//alert(obj.code);
				if(obj == null){//Le numero ne se trouve pas dans donneesSenMoney
					alert("Number not found in sen Money");	
				}else{//Le numero se trouve dans donneesSenMoney
					   var choix = window.prompt("I want to change my secret code and  \n"+
						"view the last five transactions \n"+
						"1: Change my secret code\n"+
						"2: Consult my last 5 transactions");

						switch(choix)
						{
							case "1" : showModif();
					              //Changement Code
						      	function  showModif()
								  {
									var newcode;
								    var code = window.prompt("You are going to change your secret code\n"+
									"Enter your current secret code");
									if(code == obj.code){
									var newcode = window.prompt("Enter the new code");
									obj.code = newcode;
										var choix=window.confirm("Your secret code has been successfully changed"+
			                                  "\n Do you want to return to the menu?");

													if(choix==true){
														menus();
													}	
									}
									   
									else{
										var choix=window.confirm("Erone code\n Do you want to return to the menu ?");
										if(choix==true){
											menus();
										}
									}
								  }
							break;
							
							case "2": showTransaction();
							   //Consulter les transactions
							  function showTransaction()
								{
									newcode=window.prompt("To receive your last 5 transactions please enter your secret code");
									if(newcode==obj.code){
										var choix=window.confirm("Your last five transactions\n"+
											  " Deposit : --1000.00-- \n"+
											  " Transfer : --2000.00--\n"+
											  " Withdrawal : --500.00--\n"+
											  " Transfer : --1000.00--\n"+
											  " Payment : --5000.00-- ");
									 }
								   else
							        {
								    var choix=window.confirm(" Erone Code\n Do you want to return to the menu ?");
								     if(choix==true){
								      menus();
						             }
								  }  
							} 
								break;		
						}
					}	
				}				
