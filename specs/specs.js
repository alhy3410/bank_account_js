describe('BankAccount', function() {
  it("creates a new bank account", function() {
    var testBankAccount = new BankAccount("Joe", 150000.00);
    expect(testBankAccount.name).to.equal("Joe");
    expect(testBankAccount.initialDeposit).to.equal(150000.00);
  });

  it('will deposit some money into the account', function(){
    var testBankAccount = new BankAccount("Joe", 150000.00)
    testBankAccount.change(50000.00);
    expect(testBankAccount.initialDeposit).to.equal(200000.00);
  });

// using one function to refactor
  // it('will withdraw some money into the account', function(){
  //   var testBankAccount = new BankAccount("Joe", 150000.00)
  //   testBankAccount.withdraw(50000.00);
  //   expect(testBankAccount.initialDeposit).to.equal(100000.00);
  // });
});
