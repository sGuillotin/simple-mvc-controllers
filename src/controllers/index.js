const path = require('path');

// There is no reason for the name here except an arbitary example
// of updating the server data based on a client request.
let name = 'unknown';


const notFound = (req, res) => {
  return res.status(404).sendFile(path.resolve(`${__dirname}/../../views/notFound.html`));
};


const hostIndex = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));
};

const hostPage1 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));
};

const hostPage2 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));
};


const getName = (req, res) => {
  return res.json({name});
};

const setName = (req, res) => {
  console.dir(req.body);

  if(!req.body.firstName || !req.body.lastName){
    return res.status(400).json({
      id: 'setNameMissingParams',
      error: 'firstname and lastname are both requuired'
    });
  }

  const name = `${req.body.firstName} ${req.body.lastName}`;
  return res.json({name});
}


module.exports = {
  notFound,
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
}