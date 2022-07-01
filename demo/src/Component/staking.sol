// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
library SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}


interface ERC20_STD{

function name() external view returns (string memory);
function symbol() external view  returns (string memory);
function decimals() external view  returns (uint8);
function totalSupply() external view  returns (uint256);
function balanceOf(address _owner) external view returns (uint256 balance);
function transfer(address _to, uint256 _value) external returns (bool success);
function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
// function approve(address _spender, uint256 _value) public virtual returns (bool success);
function allowance(address _owner, address _spender) external view returns (uint256 remaining);

// event Transfer(address indexed _from, address indexed _to, uint256 _value);
// event Approval(address indexed _owner, address indexed _spender, uint256 _value);


}

contract Ownership{
    address public contractOwner;
    address public newOwnwer;
    event TransferOwnerShip(address indexed _from, address indexed _to);

    constructor(){
        contractOwner=msg.sender;
    }

    function changeOwnership(address _to) public{
        require(msg.sender==contractOwner, "only contract owner chan change the ownership");
        newOwnwer=_to;
    }

    function acceptOwner() public {
        require(msg.sender==newOwnwer, "only new owner can call this fucntion");
        contractOwner=newOwnwer;
        emit TransferOwnerShip(contractOwner, newOwnwer);
        newOwnwer=address(0);
    }

}

contract StakingMNT is Ownership{
    uint  public StackTime;
    uint  public currentTime;
    uint public rewardTime;
    uint public finalTimes;
    uint public balance;
    uint public perc;
    uint public stacked_value;

 ERC20_STD mntToken = ERC20_STD(0xa131AD247055FD2e2aA8b156A11bdEc81b9eAD95);

constructor(){
    
}

function getNameofToken() public view returns(string memory){
    return mntToken.name();
}

function getSymbol() public view returns(string memory){
    return mntToken.symbol();
}
function getDecimal() public view returns(uint){
    return mntToken.decimals();
}

function gettotalSupply() public view returns(uint){
    return mntToken.totalSupply();
}
   
function getCurrentOwner() public view returns(address){
    return address(this);
}

function getBalance(address _user) public view returns(uint){
    return mntToken.balanceOf(_user);
}

function stakeTokens(uint tokenToBeStack )public   returns(bool){
    require(mntToken.allowance(msg.sender, address(this))>=tokenToBeStack, "you do not have approval to stack this much token, kindly check approval");
    mntToken.transferFrom(msg.sender,address(this),tokenToBeStack);
    stacked_value=tokenToBeStack;
    StackTime=block.timestamp;
    return true;

}

function checkAllowance(address user) public view returns (uint limit){
    return mntToken.allowance(msg.sender, user);
}


function claimRewards() public  returns(bool){
    currentTime=block.timestamp;
    rewardTime =currentTime - StackTime;
    finalTimes=rewardTime/60;
    balance = stacked_value;
    require(finalTimes<=10, "you claimed rewards more than 10 times");
    perc= balance*2/100*(finalTimes);
    mntToken.transfer(msg.sender,perc);
    return true;

}

function getRewards() public view returns(uint){
    return perc;
}



    // function getReward() view public returns(uint256){


    //     return uint256(1200) / uint256(600) - 6;
    // }


    // function getCurrentTime() view public returns(uint256){
    //     return block.timestamp;
    // }
}

