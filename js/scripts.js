function BankAccount(name, initialDeposit){
  this.name = name;
  this.initialDeposit = initialDeposit;
}

BankAccount.prototype.deposit = function(amount){
  var newAmount = this.initialDeposit + amount;
  this.initialDeposit = newAmount;
}

BankAccount.prototype.withdraw = function(amount){
  var newAmount = this.initialDeposit - amount;
  this.initialDeposit = newAmount;
}
