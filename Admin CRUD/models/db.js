const mongoose = require('mongoose');

const uri = //Removed the uri string here, since it contained my username and password. 

    async function connect() {
        try {
            await mongoose.connect(uri);
            console.log("Connected to MongoDB");
        }
        catch (error) {
            console.error(error);
        }
    }

connect();

require('./admin.model');