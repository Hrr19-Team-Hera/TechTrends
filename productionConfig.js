<<<<<<< 3e594682ba1eba23ff6ba8f77631b53cc51c182f
var app = require('./server.js');
var inquirer = require('inquirer');
process.env.dev = false;
const port = 8000;
const mongoose = require('mongoose');

const POSTINGSURI;
mongoose.connect(POSTINGSURI);
=======
const app = require('./server.js');
const inquirer = require('inquirer');
const keysMethods = require('./services/keys.js');

const POSTINGSURI = keysMethods.getConnectionString();

const port = 8000;
const mongoose = require('mongoose');

>>>>>>> remove public connection string
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