import Nav from '../Component/nav'
import React, { useEffect, useState } from 'react'

import Footer from './footer';
import Header from './header';
import SideBar from './sideBar';
import Cookies from 'js-cookie'
import config from '../config/config';
import Web3 from '/node_modules/web3/dist/web3.min.js';



function Dashboard() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null)
  const [error, setError] = useState("")
  const [check, setCheck] = useState(false)
useEffect(()=>{
  check_Connection()
},[])
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
   
      console.log("ethereum connected")

    } else if (window.web3) {
      provider = window.web3.currentProvider;
      console.log("web3 connected")
    } else {
      setError("Non-Ethereum browser detected. You should consider trying MetaMask!")
      console.log(
        'Non-Ethereum browser detected. You should consider trying MetaMask!'
      );
    }
    return provider;
  };
const check_Connection=async ()=>{
  const web3 = new Web3 (window.ethereum);
  const userAccount = await web3.eth.getAccounts();
  const account = userAccount[0];
  setAddress(account)
  setCheck(true)
}
  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {

        if (currentProvider !== window.ethereum) {
          console.log(
            'Non-Ethereum browser detected. You should install MetaMask!'
          );
        }
        await currentProvider.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        console.log(account)
        setAddress(account)
        let ethBalance = await web3.eth.getBalance(account);
        ethBalance = web3.utils.fromWei(ethBalance, 'ether');
        setBalance(ethBalance)
        console.log(ethBalance)
        if (userAccount.length === 0) {
          console.log('Please connect to meta mask');
        }
      }
    } catch (err) {
      console.log(
        'There was an error fetching your accounts. Make sure your Ethereum client is configured correctly.'
      );
    }


  }

  const loginData = (!Cookies.get('loginSuccessDemoProject')) ? [] : JSON.parse(Cookies.get('loginSuccessDemoProject'));

  if (loginData == "") {
    window.location.href = `${config.baseUrl}`
  }
  else {

  }

  return (

    <div >

      <>

        <Nav />
        <Header />
        <SideBar />

        <div>

          {/* <button className="btn login-form__btn submit" onClick={detectCurrentProvider} style={{ marginLeft: "700px", alignItems: "center" }}>connect to wallet</button> */}
          <br></br>
          <h4 class="text-center mt-15" style={{ color: 'red' }}>{error}</h4>
          <button className="btn login-form__btn submit" onClick={onConnect} style={{ marginLeft: "700px", alignItems: "center" }}>connect to Metamask</button>

          <div>       <h4 class="text-center mt-15" style={{ color: 'blue' }}>{address}</h4>
            <h4 class="text-center mt-15" style={{ color: 'blue' }}>{balance}</h4></div>
          <br></br>
        </div>

        {/* <div>  <div class="container h-100">
            <div class="row justify-content-center h-100">
              <div class="col-xl-6">
                <div class="form-input-content">
                  <div class="card login-form mb-0">
                    <div class="card-body pt-5">

                      <form class="mt-5 mb-5 login-input">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Send Ether" name="Send_Ether" />

                        </div>
                        <div class="form-group">
                          <input type="number" class="form-control" placeholder="Enter Address" name="Address" />

                        </div>

                        <button class="btn login-form__btn submit w-100" >Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</div> */}

      </>

    </div>


  );
}

export default Dashboard;