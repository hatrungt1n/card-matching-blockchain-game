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
	  constant: true,
	  inputs: [],
	  name: "name",
	  outputs: [
		{
		  name: "",
		  type: "string",
		},
	  ],
	  payable: false,
	  stateMutability: "view",
	  type: "function",
	},
	{
	  constant: false,
	  inputs: [
		{
		  name: "_spender",
		  type: "address",
		},
		{
		  name: "_value",
		  type: "uint256",
		},
	  ],
	  name: "approve",
	  outputs: [
		{
		  name: "",
		  type: "bool",
		},
	  ],
	  payable: false,
	  stateMutability: "nonpayable",
	  type: "function",
	},
	{
	  constant: true,
	  inputs: [],
	  name: "totalSupply",
	  outputs: [
		{
		  name: "",
		  type: "uint256",
		},
	  ],
	  payable: false,
	  stateMutability: "view",
	  type: "function",
	},
	{
	  constant: false,
	  inputs: [
		{
		  name: "_from",
		  type: "address",
		},
		{
		  name: "_to",
		  type: "address",
		},
		{
		  name: "_value",
		  type: "uint256",
		},
	  ],
	  name: "transferFrom",
	  outputs: [
		{
		  name: "",
		  type: "bool",
		},
	  ],
	  payable: false,
	  stateMutability: "nonpayable",
	  type: "function",
	},
	{
	  constant: true,
	  inputs: [],
	  name: "decimals",
	  outputs: [
		{
		  name: "",
		  type: "uint8",
		},
	  ],
	  payable: false,
	  stateMutability: "view",
	  type: "function",
	},
	{
	  constant: true,
	  inputs: [
		{
		  name: "_owner",
		  type: "address",
		},
	  ],
	  name: "balanceOf",
	  outputs: [
		{
		  name: "balance",
		  type: "uint256",
		},
	  ],
	  payable: false,
	  stateMutability: "view",
	  type: "function",
	},
	{
	  constant: true,
	  inputs: [],
	  name: "symbol",
	  outputs: [
		{
		  name: "",
		  type: "string",
		},
	  ],
	  payable: false,
	  stateMutability: "view",
	  type: "function",
	},
	{
	  constant: false,
	  inputs: [
		{
		  name: "_to",
		  type: "address",
		},
		{
		  name: "_value",
		  type: "uint256",
		},
	  ],
	  name: "transfer",
	  outputs: [
		{
		  name: "",
		  type: "bool",
		},
	  ],
	  payable: false,
	  stateMutability: "nonpayable",
	  type: "function",
	},
	{
	  constant: true,
	  inputs: [
		{
		  name: "_owner",
		  type: "address",
		},
		{
		  name: "_spender",
		  type: "address",
		},
	  ],
	  name: "allowance",
	  outputs: [
		{
		  name: "",
		  type: "uint256",
		},
	  ],
	  payable: false,
	  stateMutability: "view",
	  type: "function",
	},
	{
	  payable: true,
	  stateMutability: "payable",
	  type: "fallback",
	},
	{
	  anonymous: false,
	  inputs: [
		{
		  indexed: true,
		  name: "owner",
		  type: "address",
		},
		{
		  indexed: true,
		  name: "spender",
		  type: "address",
		},
		{
		  indexed: false,
		  name: "value",
		  type: "uint256",
		},
	  ],
	  name: "Approval",
	  type: "event",
	},
	{
	  anonymous: false,
	  inputs: [
		{
		  indexed: true,
		  name: "from",
		  type: "address",
		},
		{
		  indexed: true,
		  name: "to",
		  type: "address",
		},
		{
		  indexed: false,
		  name: "value",
		  type: "uint256",
		},
	  ],
	  name: "Transfer",
	  type: "event",
	},
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
  const Contract_ADDRESS_TOKEN = "0x7450949388C76A79822eff084196F5211c156535";
  
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
	console.log(contractToken.methods);
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
	  buttonPlay.addEventListener("click", () => {
		contractToken.methods
		  .approve(
			Contract_ADDRESS,
			web3.utils.toHex(web3.utils.toWei(String(1 * 10), "ether"))
		  )
		  .send({
			from: account,
		  });
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