function calculateLoan(){
  loanAmountValue = document.getElementById("loan-amount").value ;

  InterestRateValue = document.getElementById("interest-rate").value; 
  
  MonthsToPayValue = document.getElementById("months-to-pay").value ;
  

  interest= (loanAmountValue * 
    (interestRateValue * 0.01)) / MonthsToPayValue


  monthlyPayment= (loanAmountValue/ MonthsToPayValue + interest).toFixed(2);

document.getElementById("payment").innerHTML= 
`Monthly payment: ${monthlyPayment}`

}