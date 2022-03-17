// import * as connect_SM from "./connectSM.js";

const ethereumButton = document.querySelector('.enableEthereumButton');
ethereumButton.textContent = "Connect"
const addressDisplay = document.querySelector(".address")
const numOfTokenDisplay = document.querySelector(".token")
const get_Token = document.querySelector(".getToken")
const buttonPlay = document.querySelector(".overlay-button-small");

// check if user have installed metamask or not
function checkMetamask() {
    if (typeof window.ethereum !== "undefined") {
        console.log('Metamask is installed!')
    } else {
        alert("You need to install metamask")
    }
}

// get metamask account from user
async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0]; 
    console.log(account);
    if (account) {
        ethereumButton.textContent = "Connected"
        addressDisplay.textContent = "Your address: " + account
        numOfTokenDisplay.textContent = "You have: " + await web3.eth.getBalance(account) + " T1N"
        get_Token.addEventListener('click', () => {
            connect_SM.methods.getToken().send({
                from: account,
            })
        })
		buttonPlay.addEventListener('click', () => {
			connect_SM.methods.sendToken().send({
				from: account,
			})
		})
    }
};

ethereumButton.addEventListener('click', () => {
    checkMetamask();
    getAccount();
});

const Contract_ABI = [
	{
		"inputs": [],
		"name": "getToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const Contract_ADDRESS = "0xE30f98B3A5610C6DbaEa1156be08012dD43874b4" 

const web3 = new Web3(window.ethereum)

const connect_SM = new web3.eth.Contract(Contract_ABI, Contract_ADDRESS);