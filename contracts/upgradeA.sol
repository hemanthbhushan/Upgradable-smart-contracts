// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract upgradeA{
    uint private  num;
    
    function set(uint _num) public {
        num = _num;
    }
    function get() public view returns(uint){
        return num;
    } 

    function increament() public {
        num++;
    }

}