const mongoose = require('mongoose');
const userSchema = mongoose.Schema({

    name: {
        require: true,
        type: String,
        trim: true,

    },

    email: {
        require: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {

                const common = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
                return value.match(common);
            },
            message: "please enter a valid email address",
        }

    },

    password: {
        require: true,
        type: String,
    }



});

const User = mongoose.model('User', UserSchema);    

module.exports = User;