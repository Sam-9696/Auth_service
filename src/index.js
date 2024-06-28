const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/ServerConfig');
const apiRoutes = require('./routes/index');

// const UserService = require('./services/user-service');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async ()=> {
        console.log(`Server Started on Port: ${PORT}`);
        
        // const service = new UserService();
        // // const newToken = service.createToken({email: 'sam@admin.com', id: 1});
        // // console.log("New token is", newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbUBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzE5NjA4MjEwLCJleHAiOjE3MTk2MTE4MTB9.umKZ1vNUXiL7HOLUTgxlAKoIgjzRIMgU_VgXE3Qbp9Y'
        // const response = service.verifyToken(token);
        // console.log(response);
    })
}

prepareAndStartServer();