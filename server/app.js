const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
require('dotenv').config();
const connectDB = require('./config/db.js');
const PORT = process.env.PORT || 5000;
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

connectDB();

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileupload({
    createParentPath: true,
}));
app.use(bodyParser.json(), urlencodedParser);
app.use('/',require('./routes/imageRoute'));
app.use('/',require('./routes/getDetailsRoute'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);