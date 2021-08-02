const {response, request} = require('express');

const getPerson = (req = request, res = response) =>{
    res.json({
        "msg": "Get API Controller",
    });
}

const postPerson = (req = request, res = response) =>{

    res.json({
        "msg": "Post",
    });
}

const putPerson = (req = request, res = response) =>{
    const {id}= req.params;
    res.json({
        "msg": "Put controller", 
        id
    });
}

const deletePerson = (req = request, res = response) =>{
    res.json({
        "msg": "Delete controller"
    });
}

module.exports = {
    getPerson,
    postPerson,
    putPerson,
    deletePerson,
}