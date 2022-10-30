# DecentraMedia - A Decentralized Social Media

Share your thoughts permanently by storing them on the Ehtereum blockchain!

It's kind of like a decentralized Twitter.

## App Overview
![Screenshot of DecentraMedia](https://github.com/Tej-Sharma/decentra-media/blob/master/screenshots/ss1.png?raw=true)

## Features

- Login using your MetaMask or other crypto wallet.
- Share thoughts permanently on the feed. 
  - Pay ETH using your wallet to post.
- Instead of liking, you can tip other people's posts! 
  - Send ETH to your favorite creators.

## Pay Using Your Wallet
![Using MetaMask](https://github.com/Tej-Sharma/decentra-media/blob/master/screenshots/ss2.png?raw=true)


## Code Structure

- `/src/contracts/SocialNetwork.sol` - the smart contract that serves as the backend for the application.
- `src/components` - the React code to display the frontend to the user.
- `test` - test script to ensure the smart contract behaves correctly.
- `src/abis` - migrated smart contract code that is used to import the smart contract's logic into the frontend.
- `migrations` - helper scripts to deploy the smart contract to the blockchain.

## Tech Stack

- `Smart Contract`: Solidity, Ganache, Truffle
- `Frontend`: React, JS, HTML, CSS
- `Testing Library`: Chai

## Tools Used

- `Ganache` - a blockchain that runs locally and mimics Ethereum in order to test out the application.
- `Truffle` - packages the smart contract and uploads it on Ganache.

Made with the help of [Gregory's amazing course](https://www.dappuniversity.com/articles/blockchain-tutorial#part4)
