import {ethers} from 'ethers'

const { ethereum } = window;

//accessing provived changed to this
let provider = new ethers.BrowserProvider(window.ethereum)

// Contract ABI
const contractABI = [
    {
        "inputs": [],
        "name": "MAX_WAITLIST_SEATS",
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
        "name": "joinWaitlist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "seatsFilled",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "waitlisted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

// Deployed contract address
// Goerli test net
let contractAddress = "0xc91037E440ad3001726b0E701759eEBb6B6ef688";
// Mainnet will be deployed on 18th JULY

export const checkIfConnected = async (setConnectedAddress) => {

    if (!ethereum) {
        console.log("Please install MetaMask to connect.");
        return;
    }

    try {
        if (ethereum.selectedAddress) {
            await setConnectedAddress(ethereum.selectedAddress)
        }
        
    } catch (error) {
        console.error("Failed to connect to MetaMask:", error);
    }

}

export const connectMetaMask = async (setConnectedAddress) => {
    if (!ethereum) {
        alert("Please install MetaMask to connect.");
        return;
    }

    try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        setConnectedAddress(ethereum.selectedAddress)
    } catch (error) {
        console.error("Failed to connect to MetaMask:", error);
    }
};

export const formatAddress = (address) => {
    const firstFour = address.substring(0, 4);
    const lastFour = address.substring(address.length - 4);
    return `${firstFour}...${lastFour}`;
};

export const handleDisconnect = async (setConnectedAddress) => {
    try {
        setConnectedAddress('');
        console.log("Disconnected from MetaMask!");
    } catch (error) {
        console.error("Failed to disconnect from MetaMask:", error);
    }
};

// export const checkIfJoined = async (setWaitlisted) => {
   
//     const contract = new ethers.Contract(contractAddress, contractABI, provider);

//     try {

//         const waitlisted = await contract.waitlisted(ethereum.selectedAddress)
//         if (waitlisted === true) {
//            setWaitlisted(true)
//         } else{
//            setWaitlisted(false)
//         }

//     } catch (error) {
//         console.error(error.message)
//     }

// }

// export const joinWaitList = async () => {

//     if (!ethereum) {
//         alert("Please install MetaMask to connect.");
//         return;
//     }

//     //connect if not connected
//     await ethereum.request({ method: 'eth_requestAccounts' });

//     //required to intract with a deployed contract
//     const signer = await provider.getSigner(ethereum.selectedAddress)
     
//     const contract = new ethers.Contract(contractAddress, contractABI, signer);

//     try {
//         const transaction = await contract.joinWaitlist();
//         await transaction.wait(1);
//         console.log("Successfully joined the waitlist!");
//     } catch (error) {
//         console.error("Error joining the waitlist:", error);
//         if (error.message.includes('Already on the waitlist')) {
//             alert(`Transaction reverted: Already on the waitlist'`);
//         } else {
//             alert('Error joining the waitlist. Please try again later.');
//         }
//     }

//     await checkSeatFilled()

//     window.location.reload(false);
// }

// export const checkSeatFilled = async (setSeatsFilled) => {

//     //connect to deployed contract
//     const contract = new ethers.Contract(contractAddress, contractABI, provider)

//     try {
//         const seatsFilled = (await contract.seatsFilled()).toString()
//         setSeatsFilled(seatsFilled)
        
        
//     } catch (error) {
//         console.error(error.message)
        
//     }


// }

    
