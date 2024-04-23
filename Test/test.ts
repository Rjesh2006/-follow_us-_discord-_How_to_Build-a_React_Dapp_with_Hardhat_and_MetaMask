// Importing the 'expect' function from the 'chai' library for assertions
import { expect } from 'chai';

// Importing the 'ethers' namespace from the 'hardhat' library
import { ethers } from 'hardhat';

// Describe block for the Greeter smart contract
describe('Greeter', function (): void {
  
  // Test case: Should return the new greeting once it's changed
  it("Should return the new greeting once it's changed", async function (): Promise<void> {
    
    // Get the contract factory for the Greeter smart contract
    const Greeter = await ethers.getContractFactory('Greeter');
    
    // Deploy an instance of the Greeter contract with the initial greeting 'Hello, world!'
    const greeter = await Greeter.deploy('Hello, world!');
    
    // Wait for the contract deployment to be confirmed
    await greeter.deployed();

    // Assert that the initial greeting is 'Hello, world!'
    expect(await greeter.greet()).to.equal('Hello, world!');

    // Set a new greeting to 'Hola, mundo!' and get the transaction object
    const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

    // Wait until the transaction is mined and confirmed
    await setGreetingTx.wait();

    // Assert that the greeting has been successfully changed to 'Hola, mundo!'
    expect(await greeter.greet()).to.equal('Hola, mundo!');
  });
});
