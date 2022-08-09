const express = require('express')
const fileupload = require('express-fileupload')
const cors = require('cors')
const ProductRoute = require("./routes/ProductRoute.js")

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use(express.static(`public`));
app.use(ProductRoute);

app.listen(5000, () => console.log('Server aman lur!!'));