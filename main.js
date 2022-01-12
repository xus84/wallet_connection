let accounts;

window.onload = () => {
    console.log('App is loaded')
}

const enableEth = async () => {
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts'}).catch(err => {
        console.log(err.code);
    } )

    console.log(accounts);
}