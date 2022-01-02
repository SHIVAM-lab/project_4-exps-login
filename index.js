//require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpress = require('aws-serverless-express');
const app = express();
const {
    connection
} = require('./connection.js');
app.use(express.static("public"));

const {
    login
} = require('./login');
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.post('/login/signin', async function (req, res) {
    var x = req.body;
    if (!x.email || !x.password) {
        res.send({
            'status': 0,
            'message': 'emal or password is empty'
        });
        return 0;
    }
    var x = await login(req.body);
    res.send(x);
});





///////////////////////////////////////GET_PLOYMER_TYPES//////////////////////////////////////////////




// app.listen(3000, function(req,res){
//     console.log(`sev`);
// });

const server=awsServerlessExpress.createServer(app);
exports.handler=(event,context)=>{
	console.log("Event handler :"+JSON.stringify(event));
	awsServerlessExpress.proxy(server,event,context);
}