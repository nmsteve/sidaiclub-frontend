

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


