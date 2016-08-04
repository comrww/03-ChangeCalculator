$(document).ready(function() {

		$("#calculate").click(calculateChangeDue);

		    function calculateChangeDue() {
			    
				var totalAmountDue = $("#totalAmountDue").val();
				var amountCustomerPaid = $("#amountCustomerPaid").val();

				var dollars, quarters, dimes, nickels, pennies;
				dollars = quarters = dimes = nickels = pennies = 0;
    			
    			var totalAmountDueBack = amountCustomerPaid - totalAmountDue;

	   			var dollars = Math.floor((totalAmountDueBack * 100) / 100);
	   				var totalAmountDueBack = totalAmountDueBack * 100 % 100;

    			var quarters = Math.floor(totalAmountDueBack / 25);
    				var totalAmountDueBack = totalAmountDueBack - (quarters * 25);

    			var dimes = Math.floor(totalAmountDueBack / 10);
    				var totalAmountDueBack = totalAmountDueBack - (dimes * 10);

      			var nickels = Math.floor(totalAmountDueBack / 5);
    				var totalAmountDueBack = totalAmountDueBack - (nickels * 5);

    			var pennies = Math.floor(totalAmountDueBack);
				
		        $("#answerAreaDollars").html(dollars + " dollars");
		        $("#answerAreaQuarters").html(quarters + " quarters");
		        $("#answerAreaDimes").html(dimes + " dimes");
		        $("#answerAreaNickels").html(nickels + " nickels");
		        $("#answerAreaPennies").html(pennies + " pennies");

		    }
});
