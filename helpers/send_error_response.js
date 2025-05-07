const { response } = require("express");

const sendErrorresponse = (error, res) => {
  console.log(error);
  res.status(400).send({message: "Xatolik", error: error})
}

module.exports = {
  sendErrorresponse
}