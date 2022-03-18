const Contract_ABI = [
	{
	  inputs: [],
	  name: "getToken",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function",
	},
	{
	  inputs: [],
	  name: "sendToken",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function",
	},
	{
	  inputs: [],
	  stateMutability: "nonpayable",
	  type: "constructor",
	},
	{
	  inputs: [
		{
		  internalType: "address",
		  name: "user",
		  type: "address",
		},
	  ],
	  name: "getBalance",
	  outputs: [
		{
		  internalType: "uint256",
		  name: "",
		  type: "uint256",
		},
	  ],
	  stateMutability: "view",
	  type: "function",
	},
];

const CONTRACT_TOKEN_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
];

const ethereumButton = document.querySelector(".enableEthereumButton");
ethereumButton.textContent = "Connect";
const addressDisplay = document.querySelector(".address");
const numOfTokenDisplay = document.querySelector(".token");
const get_Token = document.querySelector(".getToken");
const buttonPlay = document.querySelector(".overlay-button-small");

  // check if user have installed metamask or not
function checkMetamask() {
	if (typeof window.ethereum !== "undefined") {
		console.log("Metamask is installed!");
	} else {
		alert("You need to install metamask");
	}
}
const Contract_ADDRESS = "0x84019919C4981423075bA5bDf19c808E1205C541";
const Contract_ADDRESS_TOKEN = "0x2195dbFCBE8Dd18242eF6Aa8D976B69cFaC3cFE2";

const web3 = new Web3(window.ethereum);

const connect_SM = new web3.eth.Contract(Contract_ABI, Contract_ADDRESS);
const contractToken = new web3.eth.Contract(
	CONTRACT_TOKEN_ABI,
	Contract_ADDRESS_TOKEN
);

// get metamask account from user
async function getAccount() {
	const accounts = await ethereum.request({ method: "eth_requestAccounts" });
	const account = accounts[0];
	if (account) {
		ethereumButton.textContent = "Connected";
		addressDisplay.textContent = "Your address: " + account;
		numOfTokenDisplay.textContent =
		"You have: " +
		web3.utils.fromWei(
			await contractToken.methods.balanceOf(account).call(),
			"ether"
		) +
		" T1N";

		get_Token.addEventListener("click", () => {
			connect_SM.methods.getToken().send({
				from: account,
			});
		});

		// const isAllowance = await contractToken.methods.allowance(account, Contract_ADDRESS).call()
		
		buttonPlay.addEventListener("click", () => {
			if (isAllowance < 1) {
				contractToken.methods
				.approve(
					Contract_ADDRESS,
					web3.utils.toHex(web3.utils.toWei(String(1 * 10), "ether"))
				)
				.send({
					from: account,
				});
			}
			connect_SM.methods.sendToken().send({
				from: account,
			});
		});
	}
}

ethereumButton.addEventListener("click", () => {
	checkMetamask();
	getAccount();
});