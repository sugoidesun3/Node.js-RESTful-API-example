exports.logIn = ( req, res, next ) => {
    res.status(200).json({
        token: "jwt" // return jwt to make future requests
    });
};

exports.signUp = ( req, res, next ) => {
    res.status(201).json({
        user: {
            name: "USERNAME",
            email: "123@456.com",
            img: "" // maybe
        } 
        // we might log the user in automatically after the sign up success
    });
};

exports.deleteAccount = ( req, res, next ) => {
    const id = req.params.id;
    res.status(204).json();
};