function BankAccount(ownerName, initialDeposit){
  this.ownerName = ownerName;
  this.initialDeposit = parseFloat(initialDeposit);
}

BankAccount.prototype.change = function(amount){
  var newAmount = (this.initialDeposit + parseFloat(amount));
  this.initialDeposit = newAmount;
}

function resetFields(){
  $('input#bank_account_initial_deposit').val("");
  $('input#bank_account_owner_name').val("");
}

$(document).ready(function(){
  $('form#bank_account').submit(function(event){
    event.preventDefault();
    var inputName = $('input#bank_account_owner_name').val();
    var inputInitialDeposit = $('input#bank_account_initial_deposit').val();
    var newBankAccount = new BankAccount(inputName, inputInitialDeposit);

    resetFields();
    $('ul#accounts').append("<li><span class='account_info'> Account Information: <br> Account Owner's Name: " + newBankAccount.ownerName + ", Starting Amount: " + newBankAccount.initialDeposit + "</span></li>");

    $('.account_info').last().click(function(){
      $('#show-each-account').show();

      $('#show-each-account').append('<form id="account_altering_amount">' +
      '<p>Account Owners Name: <span class="owner-name"></span></p>' +
      '<p>Account Amount: <span class="account-amount"></span></p>' +
      '<div class="form-group">' +
      '<label for="alter_amount">Alter Your Account: Deposit(+) or Withdraw(-) Your Amount: </label>' +
      '<input type="number" step="0.01" class="form-control" id="alter_amount">' +
      '</div>' +

      '<button type="submit" class="btn">Alter Account</button>' +
      '</form>')
      $('.owner-name').text(newBankAccount.ownerName);
      $('.account-amount').text(newBankAccount.initialDeposit);

      $('form#account_altering_amount').submit(function(event){
        event.preventDefault();
        var amountToChange = parseFloat($('input#alter_amount').val());
        newBankAccount.change(amountToChange);
        $('.account-amount').text(newBankAccount.initialDeposit);
        $('input#alter_amount').val("");

      });
    });



  });
});
