import Nav from '../Component/nav'
import React, { useEffect, useState } from 'react'
import Header from './header';
import SideBar from './sideBar';
import Cookies from 'js-cookie'
import config from '../config/config';
import Web3 from '/node_modules/web3/dist/web3.min.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import minABI from './abi.json'
import minABIS from './abitoken.json'
import '../Component/tablestyle.css'
function Dashboard() {
  const currentDate = new Date();


  let tokenContractAddress = "0x1D655DF7D70434438355C68c8db47C63c4d70b10";
  let ownerAddress = "0x3e014c4Fbaf266fa83f6ef875Ef0D0666B51fb31"
  let contractAddress = "0x5e240876C40089efaE1281477444CF8D14667900"


  const [address, setAddress] = useState("");
  const [getBalance, setBalance] = useState()
  const [check, setCheck] = useState(false)
  const [enterAamount, setenterAamount] = useState('');
  const [enterAddress, setenterAddress] = useState('');
  const [error, setError] = useState({})
  const [loading, setLoading] = useState("send")
  const [token, setToken] = useState(null)
  const [showRegistration, setShow] = useState("")
  const [isLOgin, setIsLogin] = useState(false)
  const [transactionData, setTransactionData] = useState([])
  const [hide, setHide] = useState(false)


  // const[details, setDetails]=useState({})


  const getAppTransactions = () => {
    fetch('https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=0x3e014c4Fbaf266fa83f6ef875Ef0D0666B51fb31&startblock=0&endblock=9999999999&page=1&offset=100&sort=asc&apikey=PURXA7E3XYNJ6FZYY6CMZT78J61FYKU7QM')
      .then(response => response.json())
      .then(data => setTransactionData(data.result));
      setHide(true)
  }

  useEffect(() => {
    if (window.ethereum) {
      check_Connection();

    }
  }, []);

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;

      console.log("ethereum connected")

    } else if (window.web3) {
      provider = window.web3.currentProvider.enable();
      console.log("web3 connected")
    } else {
      console.log(
        'Non-Ethereum browser detected. You should consider trying MetaMask!'
      );
    }
    return provider;
  };
  const check_Connection = async () => {
    const web3 = new Web3(window.ethereum);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    let ethBalance = await web3.eth.getBalance(account);
    ethBalance = web3.utils.fromWei(ethBalance, 'ether');
    setBalance(ethBalance)
    if (account) {
      setAddress(account);
      setCheck(true);
      getTokenBal(account);
    }
  }

  const getTokenBal = async (fromAddress) => {
    const web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(minABIS, tokenContractAddress)
    let tokenBalance = await contract.methods.balanceOf(fromAddress).call();
    setToken(tokenBalance / 10 ** 18)
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
  function Validation() {
    let amounterr = '';
    let addresserr = '';
    if ((enterAamount === 0) || ((getBalance - enterAamount) <= 0)) {
      amounterr = "Please Provide valid Amount";
    }
    if ((enterAddress === '') || ((enterAddress.length) < 42)) {
      addresserr = "Please Provide valid Address";
    }
    if (amounterr || addresserr) {
      setError({ amounterr, addresserr });
      return false;
    } else {
      setLoading("processing")
      return true;
    }


  }
  const trans_Token = async () => {
    const web3 = new Web3(window.ethereum);
    let toAddress = enterAddress;
    let fromAddress = address
    let contract = new web3.eth.Contract(minABIS, tokenContractAddress)
    let amount = web3.utils.toWei(enterAamount);
    let tokenBalance = await contract.methods.balanceOf(fromAddress).call();
    setToken(tokenBalance)
    console.log(tokenBalance)
    let tx = await contract.methods.transfer(toAddress, amount).encodeABI();

    web3.eth.sendTransaction({
      from: fromAddress,
      to: tokenContractAddress,
      data: tx


    }, function (err, transactionHash) {

      if (err) {
        toast.error(`Rejected Try Again`)
        setLoading("send")

        console.log(err)
      }

      else {
        console.log(transactionHash);
        toast.success(`sucess ${transactionHash}`)
        setLoading("send")
      }
    });

  }
  const contract_Function = async () => {
    const web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(minABI, contractAddress)
    let getFunctions = await contract.methods.Owner().call();
    console.log(getFunctions)
    setShow(getFunctions)
    let getValues = await contract.methods.UserRegistration(ownerAddress).call();
    console.log(getValues)
    let checkLogin = await contract.methods.login(ownerAddress).call();
    console.log(checkLogin)
    setIsLogin(checkLogin)

  }
  const set_Function = async () => {
    const web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(minABI, contractAddress)
    let setValues = await contract.methods.setUser(ownerAddress, "aanchal", "kush", "@gmail.com", 123, 123, true).send({ from: ownerAddress });
    console.log({ setValues })
    let updateValues = await contract.methods.updateUser(ownerAddress, "aaaaaa", "aaaaa", "aaa@gmail.com", 12345, 12345).send({ from: ownerAddress });
    console.log(updateValues)

  }

  const trans_Ether = async (e) => {
    e.preventDefault();
    let valid = Validation()
    if (!valid) {
      alert('false')
    }
    else {
      const web3 = new Web3(window.ethereum);

      web3.eth.sendTransaction({
        from: address,
        to: enterAddress,
        value: web3.utils.toWei(enterAamount, 'ether'),


      }, function (err, transactionHash) {

        if (err) {
          toast.error(`Rejected Try Again`)
          setLoading("send")

          console.log(err)
        }

        else {
          console.log(transactionHash);
          toast.success(`sucess ${transactionHash}`)
          setLoading("send")
        }
      });

    }
  }

  // const transaction_History = async () => {
  //   const web3 = new Web3(window.ethereum);
  //   // const userAccount = await web3.eth.getAccounts();
  //   // let history = await new web3.eth.getTransaction("0x08290889c560912061c81541cbee5d01f306c9ec543c5480aa996dc2658183d3")
  //   // console.log(history)
  // }

  const loginData = (!Cookies.get('loginSuccessDemoProject')) ? [] : JSON.parse(Cookies.get('loginSuccessDemoProject'));

  if (loginData === "") {
    window.location.href = `${config.baseUrl}`
  }
  else {

  }



  return (
    <div >

      <Nav />
      <Header />
      <SideBar />

      <ToastContainer />
      <div>

      </div>

      <div className="content-body">

        <div className="container-fluid mt-3">
          {!check ?
            <div>
              <h3>Please connect your wallet</h3>
              <button className='btn mb-1 btn-outline-primary' onClick={onConnect}> wallet connect</button>
            </div>
            :
            <div>
              <h4>account : {address}</h4>
              <h4>balance : {getBalance}</h4>
              <h4>Token Balance: {token}</h4>


              <div className='row'>
                <div className='col-md-12'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Enter Amount</label>
                      <input type="number" value={enterAamount} className="form-control" onChange={(e) => setenterAamount(e.target.value)} />
                      <span className="validationErr" style={{ color: "red" }}>{error.amounterr}</span>

                    </div>


                    <div className='form-group'>
                      <label>Enter Address</label>
                      <input type="text" value={enterAddress} className="form-control" onChange={(e) => setenterAddress(e.target.value)} />
                      <span className="validationErr" style={{ color: "red" }}>{error.addresserr}</span>

                    </div>


                    <div className='form-group'>
                      <button className='btn btn-info' onClick={trans_Ether}>{`${loading} Ether`}</button>
                      <button style={{ marginLeft: "50px" }} className='btn btn-info' onClick={trans_Token}>{`${loading} Token`}</button>
                      {/* <button className='btn btn-info' onClick={transaction_History}>Get Transaction History</button> */}
                      {/* 
                      <button className='btn btn-info' onClick={contract_Function}>get Functions</button>
                      <button className='btn btn-info' onClick={set_Function}>set  Functions</button> */}
                      <button style={{ marginLeft: "50px" }} className='btn btn-info' onClick={getAppTransactions}>GetAll transactions</button>

                    </div>

                   {hide? <div style={{ height: '380px', width: '1000px', overflow: 'auto' }} className="fixTableHead">

                      <table className="fixTableHead thead th " cellspacing="0" width="100%">
                        <thead >

                          <tr>
                            <th scope="col">Block Number</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Value</th>
                            <th scope="col">Date</th>

                            <th scope="col">Tx hash</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactionData.map(item => (
                            <tr key={item.blockNumber}>
                              <td>{item.blockNumber}</td>

                              <td>{item.from}</td>
                              <td>{item.to}</td>
                              <td>{item.value / 10 ** 18}</td>
                              <td>{Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(item.timestamp)}</td>
                              <td>{item.hash}</td>

                            </tr>))



                          }

                        </tbody>
                      </table>

                    </div>:""
}
                  </div>



                </div>

              </div>

            </div>



          }


        </div>
      </div>






    </div>
  );
}


export default Dashboard;

