var app = require('server.js');
var inquirer = require('inquirer');

const port = 8000;
const mongoose = require('mongoose');

const POSTINGSURI = "mongodb://hera:hackreactor19@ds063406.mlab.com:63406/rawpostingsx";

console.log('URI:', POSTINGSURI);

// inquirer.prompt({type: 'confirm', message: 'connect to remote db?'}).then(
//   function(answer){
//     mongoose.connect(POSTINGSURI);
//   }
// );


//------------------server listen------------------------------
//-------------------------------------------------------------

app.listen(process.env.PORT || port, () => {
  console.log('web server listening on port', port);
});