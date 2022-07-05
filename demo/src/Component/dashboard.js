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
import stackingAbi from './stack.json'

import ecom from './ecom.json'
import SimpleDateTime from 'react-simple-timestamp-to-date'
import '../Component/tablestyle.css'
function Dashboard() {
  const currentDate = new Date();


  let tokenContractAddress = "0xff9c7C4B9ef142cc78e735b8EC4CCc0941C9AdeC";
  let contractAddress = "0x5e240876C40089efaE1281477444CF8D14667900"

  const [ownerAddress, setownerAddress] = useState("");
  const [forms, setForm] = useState({ title: "", des: '', price: "" });
  const [buyer, setBuyer] = useState({ productId: '', money: "" })
  const [address, setAddress] = useState("");
  const [getBalance, setBalance] = useState()
  const [check, setCheck] = useState(false)
  const [enterAamount, setenterAamount] = useState('');
  const [enterAddress, setenterAddress] = useState('');
  const [error, setError] = useState({})
  const [loading, setLoading] = useState("send")
  const [token, setToken] = useState(null)
  const [transactionData, setTransactionData] = useState([])
  const [hide, setHide] = useState(false)
  const [price, setPrice] = useState("")
  const [stackValue, setStackValue] = useState()
  const [showRewards, setShowRewards] = useState()
  const [showStackBal, setShowStackBal] = useState()
  const [withdrawal, setWithdrawal] = useState("")




  const getAppTransactions = () => {
    fetch('https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=0x3e014c4Fbaf266fa83f6ef875Ef0D0666B51fb31&startblock=0&endblock=9999999999&page=1&offset=500&sort=desc&apikey=PURXA7E3XYNJ6FZYY6CMZT78J61FYKU7QM')
      .then(response => response.json())
      .then(data => setTransactionData(data.result));

    setHide(true)
  }

  useEffect(() => {
    if (window.ethereum) {
      check_Connection();

    }
  }, []);
  const inputHandler = (e) => {
    const { name, value } = e.target
    setForm((old) => {
      return { ...old, [name]: value }
    })
  }

  const inputBuyer = (e) => {
    const { name, value } = e.target
    setBuyer((old) => {
      return { ...old, [name]: value }
    })
  }

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
      setownerAddress(account)
    }
  }

  const getTokenBal = async (fromAddress) => {
    const web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(minABIS, tokenContractAddress)
    let tokenBalance = await  contract.methods.balanceOf(fromAddress).call();
    setToken(tokenBalance/10**18)
    console.log(tokenBalance)
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
  // const contract_Function = async () => {
  //   const web3 = new Web3(window.ethereum);
  //   let contract = new web3.eth.Contract(minABI, contractAddress)
  //   let getFunctions = await contract.methods.Owner().call();
  //   console.log(getFunctions)
  //   setShow(getFunctions)
  //   let getValues = await contract.methods.UserRegistration(ownerAddress).call();
  //   console.log(getValues)
  //   let checkLogin = await contract.methods.login(ownerAddress).call();
  //   console.log(checkLogin)
  //   setIsLogin(checkLogin)

  // }

  const ecommerce_fucntion = async () => {
    const web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(ecom, "0xBd56226e3C1D85B831F78eA5a8AcA5E0f5A8faC3")
    let num = Number(forms.price);
    num = num * 10 ** 18;
    let str = String(num);
    let setValues = await contract.methods.registeredSeller(forms.title, forms.des, str).send({ from: ownerAddress });
    console.log(setValues)



  }
  const buy = async () => {
    const web3 = new Web3(window.ethereum);

    let contract = new web3.eth.Contract(ecom, "0xBd56226e3C1D85B831F78eA5a8AcA5E0f5A8faC3")
    let getPrice = await contract.methods.getProductPrice(price).call();
    console.log(getPrice)
    getPrice = getPrice / 10 ** 18;
    console.log(getPrice);
    let finalPrice = String(getPrice)
    let moneys = web3.utils.toWei(finalPrice, 'ether')
    let buy = await contract.methods.buy(price).send({ from: ownerAddress, value: moneys });
    console.log(buy)
  }
  const delivery = async () => {
    const web3 = new Web3(window.ethereum);

    let contract = new web3.eth.Contract(ecom, "0xBd56226e3C1D85B831F78eA5a8AcA5E0f5A8faC3")

    let delivery = await contract.methods.delivery(7).send({ from: ownerAddress });
    console.log(delivery)

  }
  const getPrice = async () => {
    const web3 = new Web3(window.ethereum);

    let contract = new web3.eth.Contract(ecom, "0xBd56226e3C1D85B831F78eA5a8AcA5E0f5A8faC3")

    let delivery = await contract.methods.getProductPrice(price).call();
    console.log(delivery)

  }
  const set_Function = async () => {
    const web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(minABI, contractAddress)
    let setValues = await contract.methods.setUser(ownerAddress, "aanchal", "kush", "@gmail.com", 123, 123, true).send({ from: ownerAddress });
    console.log({ setValues })
    let updateValues = await contract.methods.updateUser(ownerAddress, "aaaaaa", "aaaaa", "aaa@gmail.com", 12345, 12345).send({ from: ownerAddress });
    console.log(updateValues)

  }

  const stack_Token = async () => {
    const web3 = new Web3(window.ethereum);
    let moneys = web3.utils.toWei(stackValue, 'ether')

    let ERCcontract = new web3.eth.Contract(minABIS, tokenContractAddress)
    let approveERC = await ERCcontract.methods.approve("0x9d0e79b4AadB333a8a3850305777A7CBCb27b151", moneys).send({ from: ownerAddress });
    console.log(approveERC)
    let stackingcontract = new web3.eth.Contract(stackingAbi, "0x9d0e79b4AadB333a8a3850305777A7CBCb27b151")
    let stackToken = await stackingcontract.methods.stakeTokens(amount).send({ from: ownerAddress });
    setShowStackBal(stackValue);
    console.log(stackToken)

  }


  const view_Rewards = async () => {
    const web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(stackingAbi, "0x9d0e79b4AadB333a8a3850305777A7CBCb27b151")
    let rewards = await contract.methods.ViewclaimRewards().call();
    setShowRewards(rewards);
  
    console.log(rewards)

  }

  const withdraw_rewards = async () => {
    const web3 = new Web3(window.ethereum);
   
    let contract = new web3.eth.Contract(stackingAbi, "0x9d0e79b4AadB333a8a3850305777A7CBCb27b151")
    let withdrawAmount = await contract.methods.withdrawRewards(amount).send({ from: ownerAddress });
    console.log(withdrawAmount)

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
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>Stack Token and claim rewards</label>
                  <input type="number" value={stackValue} onChange={(e) => setStackValue(e.target.value)} className="form-control" />
                  <button className='btn btn-info' onClick={stack_Token}>stack Tokens</button>
                  <h3 style={{ color: "blue" }}>{`you have stack amount`}{" "}{showStackBal}</h3>

                </div>

                <br></br>
                <button className='btn btn-primary' onClick={view_Rewards}>view Rewards</button>
                <h3 style={{ color: "blue" }}>{`you have total Rewards `}{showRewards}</h3>
                <br></br>
                <br></br>

                <div className='form-group'>
                  <input type="number" value={withdrawal} onChange={(e) => setWithdrawal(e.target.value)} className="form-control" />
                  <button className='btn btn-danger' onClick={withdraw_rewards}>Withdraw Rewards</button>
                  <h3 style={{ color: "blue" }}>{`you have withdrawn rewards`}{" "}{withdrawal}</h3>
                </div>


                <br></br> 



              </div>
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
                      {/* <button style={{ marginLeft: "50px" }} className='btn btn-info' onClick={getAppTransactions}>GetAll transactions</button> */}
                      {/* <button onClick={buy}>check 2</button>
<button onClick={delivery}>delivery</button> */}
                    </div>
                    <div>
                      <h3>Registered user</h3>
                      <label>Enter title</label>
                      <input type="text" name="title" className="form-control" onChange={inputHandler} />
                      <br></br>
                      <label>Enter Description</label>
                      <input type="text" name="des" className="form-control" onChange={inputHandler} />
                      <br></br>
                      <label>Enter price</label>
                      <input type="number" name="price" className="form-control" onChange={inputHandler} />
                      <br></br>
                      <button className='btn btn-info' onClick={ecommerce_fucntion}>Register seller</button>
                    </div>
                    <div>
                      <h3>Buy product </h3>
                      <label>Enter the product code</label>
                      {/* <input type="number" name="productId" className="form-control" onChange={inputBuyer} />
{/* <br></br>              <label>Enter the amount</label>
                      <input type="number" name="money" className="form-control" onChange={inputBuyer} /> */}
                      <br></br>
                      {/* <button  className='btn btn-info'onClick={buy}>Buy product</button> */}



                      <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} />
                      <br></br>
                      <button className='btn btn-info' onClick={buy}>get price</button>
                    </div>

                    {hide ? <div style={{ height: '380px', width: '1000px', overflow: 'auto' }} className="fixTableHead">

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
                              <td><SimpleDateTime dateSeparator="/" timeSeparator="-" format="YMD">{item.timeStamp}</SimpleDateTime></td>                                <td>{item.hash}</td>

                            </tr>))


                          }

                        </tbody>
                      </table>

                    </div> : ""
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

