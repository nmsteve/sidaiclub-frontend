import { ethers } from 'ethers'
import { abi } from './abi.js'

const { ethereum } = window;

//accessing provived changed to this
let provider = new ethers.BrowserProvider(window.ethereum)

// Deployed contract address
// Sepolia
let sepoliaAddress = "0x5349d651f8c8c523d01917472a031c22F6cE7CDb";
// Arbitrum
let ArbitrumAddress = '0xc91037E440ad3001726b0E701759eEBb6B6ef688'

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

export const handleDisconnect = async (setConnectedAddress) => {
    try {
        setConnectedAddress('');
        console.log("Disconnected from MetaMask!");
    } catch (error) {
        console.error("Failed to disconnect from MetaMask:", error);
    }
};

export const mint = async (amount, setMinted, setSupply, price, countdown) => {

   // Check if metamask is installed
    if (!ethereum) {
        console.log("Please install MetaMask to connect.");
        alert("Please install MetaMask to connect.")
        return;
    }

    //connect if not connected
    await ethereum.request({ method: 'eth_requestAccounts' });

    const contractAddress = await checkConnectedChain()
    
    // if (contractAddress === '0xc91037E440ad3001726b0E701759eEBb6B6ef688') {
    //     alert('Mint day on 26TH August')
    //     return
    // }

    if (contractAddress === 'x') {
        alert('Unsupported Chain: Please switch to Arbitrum')
        await switchChain()
        return
    }

    
    try {

        const bal = await checkBalance()
        console.log(bal)

        //Get the signer
        const signer = await provider.getSigner()

        // Create an instance of the contract

        const contract = new ethers.Contract(contractAddress, abi, signer);
        //print price
        console.log(price)

        if (bal > price) {
            const tx = await contract.publicMint(amount, { value: ethers.parseEther(price.toString()) })
            await tx.wait(1)
        } else {
            alert('Insuffient Balance')
        }


    } catch (error) {
        console.error(error)

    }

    await checkSupply(setSupply)
    await checkMinted(setMinted)


}

export const checkMinted = async (setMinted) => {

    if (!ethereum) {
        console.log("Please install MetaMask to connect.");
        return;
    }

    try {

        // Create an instance of the contract
        const contract = new ethers.Contract(sepoliaAddress, abi, provider);
        const balance = await contract.balanceOf(ethereum.selectedAddress)
        const balIndecimals = Number(balance)
        console.log(balIndecimals)
        setMinted(balIndecimals)

    } catch (error) {

        console.error(error)

    }

}

// helper functions
export const checkSupply = async (setSupply) => {

    if (!ethereum) {
        console.log("Please install MetaMask to connect.");
        return;
    }

    try {

        // Create an instance of the contract
        const contract = new ethers.Contract(sepoliaAddress, abi, provider);
        const supply = await contract.totalSupply()
        const formatedSupply = ethers.formatUnits(supply, 0)
        console.log(formatedSupply)
        setSupply(formatedSupply)

    } catch (error) {

        console.error(error)

    }

}

export const checkBalance = async () => {

    //Check whether a wallent is installed
    if (!ethereum) {
        alert("Please install MetaMask to connect.");
        return;
    }

   //connect if not connected
    if (ethereum.selectedAddress == null) {

        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error("Failed to connect to MetaMask:", error);
        }
    }
    
    try {

        const bal = await provider.getBalance(ethereum.selectedAddress)
        const formatedBal = ethers.formatEther(bal)
        console.log(formatedBal)

        return formatedBal

    } catch (error) {
        console.error(error)
    }



}

export const checkConnectedChain = async () => {
    if (!ethereum) {
        alert("Please install MetaMask to connect.");
        return;
    }

    try {

        const chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log(chainId)

        switch (chainId) {
            //Arbitrum contract address
            case "0xa4b1":
                return ArbitrumAddress;
            //sepolia connected address
            case '0xaa36a7':
                return sepoliaAddress;

            default:
                return 'x';
        }

    } catch (error) {
        console.error("Failed to get ChainId:", error);
    }
};

export const switchChain = async () => {

    //check if metamask is installed
    if (!ethereum) {
        alert('Please install MetaMask')
        return
    }

    ethereum
        .request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: "0xa4b1" }], // Chain IDs are hexadecimal
        })
        .then(() => {
            console.log('Successfully switched to the new network');
        })
        .catch(async (switchError) =>  {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: "0xa4b1",
                            chainName: 'Arbitrum One',
                            rpcUrls: ['https://arb1.arbitrum.io/rpc'] /* ... */,
                            blockExplorerUrls: ['https://arbiscan.io/'],
                            nativeCurrency: {
                                name: 'ETH',
                                symbol: 'ETH',
                                decimals: 18
                            }
                        },
                    ],
                });
            } catch (addError) {
                // handle "add" error
                console.log('could not add network')
            }
        }
        // handle other "switch" errors
            console.log('could not switch')
    })
} 

export const formatAddress = (address) => {
    const firstFour = address.substring(0, 4);
    const lastFour = address.substring(address.length - 4);
    return `${firstFour}...${lastFour}`;
};



