// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


abstract contract ERC20_STD{

function name() public view virtual returns (string memory);
function symbol() public view virtual returns (string memory);
function decimals() public view virtual returns (uint8);
function totalSupply() public view virtual returns (uint256);
function balanceOf(address _owner) public view virtual returns (uint256 balance);
function transfer(address _to, uint256 _value) public virtual returns (bool success);
function transferFrom(address _from, address _to, uint256 _value) public virtual  returns (bool success);
function approve(address _spender, uint256 _value) public virtual returns (bool success);
function allowance(address _owner, address _spender) public view virtual returns (uint256 remaining);

event Transfer(address indexed _from, address indexed _to, uint256 _value);
event Approval(address indexed _owner, address indexed _spender, uint256 _value);


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

contract MyErc20 is ERC20_STD, Ownership{

string public _name;
string public _symbol;
uint8 public _decimals;
uint256 public _totalSupply;
address public _minter;
mapping(address=>uint) tokenBalanceMinter;
mapping(address=>mapping(address=>uint)) allowed;
uint256 public remainingLimit;

constructor(address  minter){
    _name="Mint";
    _symbol="MNT";
    _decimals = 18;
    _totalSupply=10000000* 10**_decimals;
    _minter=minter;
    tokenBalanceMinter[_minter]=_totalSupply;

}

function name() public view override returns (string memory){
    return _name;
}
function symbol() public view override returns (string memory){
    return _symbol;
}
function decimals() public view override returns (uint8){
    return _decimals;
}
function totalSupply() public view override returns (uint256){
    return _totalSupply;
}
function balanceOf(address _owner) public view override returns (uint256 balance){
    return tokenBalanceMinter[_owner];
}
function transfer(address _to, uint256 _value) public override returns (bool success){
    require(tokenBalanceMinter[msg.sender]>=_value, "balance is low");
    tokenBalanceMinter[msg.sender]-=_value;
    tokenBalanceMinter[_to]+=_value;
    emit Transfer(msg.sender, _to,_value);

}
function transferFrom(address _from, address _to, uint256 _value) public override  returns (bool success){
    require(allowed[_from][msg.sender]>=_value, "your balance is insuffucient");
    allowed[_from][msg.sender]-=_value;

    tokenBalanceMinter[_from]-=_value;
    tokenBalanceMinter[_to]+=_value;
    remainingLimit=_value;
}
function approve(address _spender, uint256 _value) public override returns (bool success){
    require(tokenBalanceMinter[msg.sender]>=_value, "low balance ");
    allowed[msg.sender][_spender]=_value;
    emit Approval(msg.sender, _spender, _value);

    return true;
}
function allowance(address _owner, address _spender) public  view  override returns (uint256 remaining){
        return allowed[_owner][_spender];

}

function checkLimit(address _owner, address _spender) public  returns (uint256 remaining){
        uint256 remainBal=allowed[_owner][_spender]-remainingLimit;
        return remainBal;
}



}
