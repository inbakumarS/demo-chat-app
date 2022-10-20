const express=require('express');

const bodyParser=require('body-parser');
const apps=express();

const userRoutes=require('./route/user');

apps.use(bodyParser.urlencoded({extended:false}));

apps.use(userRoutes);

apps.listen(3002);

