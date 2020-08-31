const express = require('express');
const users = require('./user_API/users.json');
const router = express.Router();

// Challenge Chapter 3
router.get('./chapter3', (req, res)=>{
    res.sendFile('./chapter3/index.html', { root: __dirname })
});

// Challenge Chapter 4
router.get('./chapter4', (req, res)=>{
    res.sendFile('./chapter4/index.html', { root: __dirname })
});

// users static data
router.get('./users', (res, req)=>{
    function GetSortOrder(item) {    
        return function(a, b) {    
            if (a[item] > b[item]) {    
                return 1;    
            } else if (a[item] < b[item]) {    
                return -1;    
            }    
            return 0;    
        }    
    } 
    let newData= userData.users.sort(GetSortOrder("name"));
})