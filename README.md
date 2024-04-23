# Follow_us-_discord-                  How_to_Builda_React_Dapp_with_Hardhat_and_MetaMask
 - *Build a React dApp for reading and updating a greeting message via a basic "Greeter" smart contract on a local blockchain.*

 # React Dapp with Hardhat and MetaMask

## Overview
This repository contains a walkthrough for building a minimal React dApp interacting with a simple Solidity smart contract. It uses Hardhat and MetaMask.

## Audience
Developers, especially those in Ethereum Developer Bootcamps, will find this tutorial helpful. Basic familiarity with command-line terminals, Node.js, GitHub, and git CLI tools is assumed.

## Prerequisites and Disclaimer
Ensure you have a basic understanding of the tools involved. This tutorial is for educational purposes only; no real money or live blockchain networks are involved. Consider using separate browsers for development and live deployments.

## Motivation
Many existing "Build a Dapp" articles miss covering modern DeFi project workflows. This tutorial integrates contemporary tools to fill that gap, helping developers bridge theory and practice.

## Educational Focus
The tutorial prioritizes practical insights into DeFi workflows. Safety is crucial when transitioning to live networks; thorough research on blockchain security is recommended.


   **This article will specifically use the following technologies all together:**

- Hardhat
- MetaMask
- ethers.js
- React
- Typescript
- The web3-react npm package


## Tools You Will Use
- *Hardhat: Facilitates local Ethereum development, smart contract coding, testing, and debugging without live Ethereum blockchain interactions.*
- *MetaMask: Ethereum-based cryptocurrency wallet browser extension for interaction with Ethereum networks.*
- *Other Tools: git CLI for code retrieval, node and yarn for smart contract and frontend Dapp build, compile, and run tasks, and Terminal window for CLI tool usage*


## Tools & Setup

### CLI Tools & Hardhat

To get started, make sure you have the necessary tools installed and obtain the example code. You'll need Node.js and npm (Node Package Manager) installed on your system.

## first we have to creat a directtory where we will isntal tihis thinks (tools)
```
mkdir <anyname>
```
*i created here <rl>*

#### 1. Node.js Installation

Follow the instructions [here](https://nodejs.org/en/download/) to install Node.js. For this tutorial, ensure you install version 16.13.1 of Node.js.

#### 2. Verify Installation

After installing Node.js, open a terminal and run the following commands to verify that Node.js and npm are installed correctly:

```bash
node -v
npm -v
```

### 3 . CLI Tools & Hardhat

To get started, make sure you have the necessary tools installed and obtain the example code. You'll need Node.js and npm (Node Package Manager) installed on your system then we hato to do this :--.
 -  *here we have some command's to to install and setup the hardaht ::::⬇️
  - 
Here are the installation and setup commands for Hardhat:

Installation:
Install Hardhat globally using npm:
```
npm install -g hardhat
```
Project Initialization:
Navigate to your project directory in the terminal.
Initialize a new Hardhat project:
```
npx hardhat
```

## Follow the prompts to select a project type and configure your project.
   ## Hardhat Configuration:

Customize your Hardhat configuration by editing the hardhat.config.js file generated in your project directory.
Configure networks, plugins, and other settings as needed for your project.

Install Dependencies (if using TypeScript or other plugins):
If you're using TypeScript or other plugins, install necessary dependencies:

```
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/h
```
 - then you will be able to see the node moduls are creted:---
 - ![Screenshot 2024-04-22 082826](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/4db2a959-5988-499e-a3a1-9f7c7b78bed0)
 - ![Screenshot 2024-04-22 082816](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/3d6e3ce4-0fcf-45d3-b705-7089ad15eb1b)

- **Here's a brief explanation of the node_modules directory:**

  Purpose: It holds all the dependencies (like Hardhat and its plugins) required by your project.
  Contents: Each dependency is stored in its own subdirectory.
  Management: Dependencies are installed and managed using npm or yarn.
  Versioning: Specific versions of dependencies are specified in your project's package.json file.
  Ignored: Typically excluded from version control to avoid unnecessary duplication.
  Installation: Run npm install or yarn install to download and install dependencies.
  Updating: Modify versions in package.json, then re-run installation to update dependencies.


### 4. Yarn Installation
- Once Node.js is installed, you'll also need to install Yarn, a package manager. Follow the instructions [here](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) to install Yarn.
- With these tools installed, you're ready to proceed with setting up your environment for building the React Dapp with Hardhat and MetaMask.
- This markdown formatting is suitable for a GitHub README.md file, providing clear instructions for setting up the development environment.

  ```
  yarn -version
  ```
### 5. Git Installation
Git is a version control system used for tracking changes in source code during software development. Follow the instructions [here](qiskit-community.github.io/qiskit-machine-learning/tutorials/01_neural_networks.html) to install Git on your system.
With these tools installed, you're ready to proceed with setting up your environment for building the React Dapp with Hardhat and MetaMask.


## :_ Now move on with our main object    :--:_🙇‍♀️
   *here wil creat a another directory inside the previous dirctory where we have instanlled all those tools :--:_(do it carefully)😥*
   
   ```
   mkdir <hardhat-ethers-react-ts-starter>
   ```
   ```
   cd <hardhat-ethers-react-ts-starter>
   ```

 - *now we have to creat some folder inside the  the(hardhat-ethers-react-ts-starter)*
 - ![Screenshot 2024-04-23 143650](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/a794c17d-8138-48b9-9fdf-344b7fbde2ae)
 - what we have inside these folder's:⬇️
 - ![Screenshot 2024-04-23 143804](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/1f83c632-ff4f-4609-8735-b5c29e6ce708)
    - click here to understand the particulars (programme file's) inside the folder
    - [cache folder ](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/tree/main/cache_folder)
    - [contract folder](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/tree/main/contracts_folder)
    - [frontend folder ](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/tree/main/frontend_folder)
  
  
## now we ha install the project's dependencies::_🧃
```
yarn 
```
*Typically, running yarn without any additional arguments will perform the following actions:
Install Dependencies: If there is a package.json file in the current directory, Yarn will read it and install the dependencies listed in it. It will create or update the node_modules directory with the required packages.*
here we have isntalled the dependencies in <hardhat-ethers-react-ts-starter> directory


```
cd frontend
```
now we have to insalled the dependensies in frontend folder then we will move from here to our main folder which is ( <hardhat-ethers-react-ts-starter> directory::

```
cd .. 
```

## compile the smart contracts ::⚖️

```
yarn hardhat compile
```
- *yarn hardhat compile compiles your Solidity smart contracts using Hardhat, generating bytecode and ABI files for each contract, which are stored in the artifacts directory. If there are any errors, they will  
   displayed in the terminal for you to fix.*


# start your local Ethereum blockchain

```
yarn hardhat node
```
*yarn hardhat node starts a local Ethereum blockchain node for testing and development, providing a sandboxed environment with pre-funded accounts and blockchain features.*
- ![image](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/75fb7c74-7b4f-4ceb-a9e6-002a40a22ce8)



**Take notice of two things in the output:**

-  Your local Ethereum network is running locally on port 8545.
-  You can see several pre-created Ethereum test accounts with their public addresses, private keys and the fact that each account has been given 10000 test ETH.
-  ⚠️ These are test accounts only and their private keys are publicly known. Never use these accounts on live Ethereum networks, nor store real money in them! ⚠️
- Now copy test Account #0’s or u can copy any  private key and store it in your favorite text editor (An excellent free editor/IDE is VSCode). You will come back to this private key later when you set MetaMask 
  up.
  
### Great! With the Hardhat project created and your local Hardhat Ethereum network running, you are halfway to the goal. 💪
 - Metamask Connection
   To use metamask to connect to this network, click on your profile and then click on settings

   ![image](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/58f47ec3-d4b0-440c-8201-8436329f49dc)

    *Then click on Networks, followed by Localhost 8545*
     - ![image](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/ba09b5d9-66da-40f1-8671-910b5fdc01e4)
     - ![image](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/660c78cf-4664-4925-806e-948932edccf1)
     - Change the Chain ID to 31337(this is the chainId for the local blockchain you are running) and then click Save
     - ![image](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/d962123e-5e7b-4413-b6e3-78112daa612d)
     - Awesome now your MetaMask has a connection to your local blockchain, we will now add the accounts that Hardhat gave to us
     - In the node terminal, you should see several accounts displayed. Let's grab one of those:
     - ![Screenshot 2024-04-23 150504](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/cc6d52f1-175b-4e36-ae52-f9b7ded8c187)
     - Go to metamask --> click on your profile --> import account. Select private key in the dropdown and paste the private key from the account you wish. You should now see an account with 10000 ETH
## NOw all thinks are set to try our dapp :- which you can see in given interface:---🏋️
*after the yarn hardhat node*
  - *we have to a laounch a new terminal to start the server*
  - first go inside your main file where your node running in new terminal you can waatch there in terface give below then 
  - ```
    yarn start 
    ```
    *the you will be able to see ur dapp :🕶️*
  - ![Screenshot 2024-04-23 152447](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/ea0403e6-3a18-4ba5-82a8-939a950a95f8)
  - ![Screenshot 2024-04-21 223327](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/b1313529-ecff-4ff5-9c38-0bb7d4687362)
  - ![Screenshot 2024-04-23 152558](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/2746743f-6d2c-4ace-8079-99e2074f2ff0)
  - ![Screenshot 2024-04-23 112154](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/0fa49a3a-f6f1-4c43-80a5-348c251c2d8a)
  - ![Screenshot 2024-04-23 112228](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/cfde7961-92dd-4b96-87b6-2e1216f4dd9a)

## hence we deployed our dapp :___successfully__🥇🕺

## here we have the structure's pf folder and files used to build this Dapp:--
![Screenshot 2024-04-23 220021](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/1f26adfd-04cf-43d6-99d0-2fc9c355ca55)

![Screenshot 2024-04-23 220048](https://github.com/Rjesh2006/-follow_us-_discord-_How_to_Build-a_React_Dapp_with_Hardhat_and_MetaMask/assets/143868643/e40050b9-05ab-4740-b6a8-f40ba3a842c7)

