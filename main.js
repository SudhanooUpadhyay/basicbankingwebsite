$(".transferbtn").click(function(){

  // ----------------------------------------------------------------
  // -----------------------  Update balance  ---------------------------
  // ------------------------------------------------------------------------
  var reg_no=prompt("Enter Unique Id of Receiver");
  var addamt=prompt("Enter amount to be transfered");
  var balance = document.getElementById(reg_no).innerHTML;
  document.getElementById(reg_no).innerHTML = parseInt(addamt)+parseInt(balance);
  // ---------------------------------------------------------------------------------


  // ---------------------------------------------------------------------------------
  // -------------------------- Update History -------------------------------------------
  // -------------------------------------------------------------------------------------------
  var history = "Rs. "+(parseInt(addamt))+' was transfered to Unique ID: '+(reg_no)
  var historyList = [];
  historyList.push(history)

  for(var i=0; i<historyList.length; i++){
    var div = document.getElementById('updateHistory');
    div.innerHTML = historyList[i] + '<br>'+'<hr>' + div.innerHTML
  }
  // --------------------------------------------------------------------------------------------------
});
