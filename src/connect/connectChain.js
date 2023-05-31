import {ethers} from 'ethers'

const { ethereum } = window;

//ethereum event reload on chain change
if (ethereum) {
    ethereum.on('chainChanged', () => {
        window.location.reload(false)
    })


    ethereum.on('accountsChanged', () => {
        
    });
}

export const checkIfConnected = async (setConnectedAddress) => {

    if (!ethereum) {
        console.log("Please install MetaMask to connect.");
        return;
    }

    try {
        if (ethereum.selectedAddress) {
            console.log(ethereum.selectedAddress)
            await setConnectedAddress(ethereum.selectedAddress)
        }
        
    } catch (error) {
        console.error("Failed to connect to MetaMask:", error);
    }

}

export const connectMetaMask = async (setConnectedAddress) => {
    if (!ethereum) {
        console.log("Please install MetaMask to connect.");
        return;
    }

    try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Connected to MetaMask!");
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

export const joinWaitList = async () => {

    //connect if not connected
    await ethereum.request({ method: 'eth_requestAccounts' });

    //accessing provived changed to this
    let provider = new ethers.BrowserProvider(window.ethereum)

    //required to intract with a deployed contract
    const signer = await provider.getSigner(ethereum.selectedAddress)
    console.log(signer)
    const contractAddress = "0xA5f62C75073E47ECd140a5234Ba514A1C36Eed27"
    const contractABI =['function joinWaitlist() public']   

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
        const transaction = await contract.joinWaitlist();
        await transaction.wait();
        console.log("Successfully joined the waitlist!");
    } catch (error) {
        console.error("Error joining the waitlist:", error);
        if (error.message.includes('Already on the waitlist')) {
            alert(`Transaction reverted: Already on the waitlist'`);
        } else {
            alert('Error joining the waitlist. Please try again later.');
        }
    }
}

    
