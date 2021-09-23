/*
    Function called with a GET request, returns an array of tasks
    related to the specific user that requested it.
*/

exports.getTasks = (req, res, next) => {
    // basic task object, to be used for
    res.status(200).json({
        tasks: [
            // reference later for the db model
            {
                title: "TITLE", // short string
                duedate: "01/01/2022", // date string
                description: "yknow bla bla bla wrryyyy", // long string
                priority: 0, // int range (0-5)
                link: "https://duckduckgo.com", // to train parsing and stuff
            },
            {
                title: "TITLE2", // short string
                duedate: "02/02/2022", // date string
                description: "stuff bla bla bla oraoraora", // long string
                priority: 2, // int range (0-5)
                link: "https://wttr.in", // to train parsing and stuff
            },
        ]
    });
};

/*
    Function called with a GET request, returns a single task
    related to the specific user that requested it, based on
    the ID sent with the request.
*/
exports.getSingleTask = (req,res,next) => {
    const id = req.params.id;
    // Search DB first
    res.status(200).json({
        task:
            // reference later for the db model
            {
                title: "TITLE", // short string
                duedate: "01/01/2022", // date string
                description: "yknow bla bla bla wrryyyy", // long string
                priority: 0, // int range (0-5)
                link: "https://duckduckgo.com", // to train parsing and stuff
            }
    });
};

/*
    Function called with a POST request, creates a new task
    object based on a mongoose model, relate it to the user,
    and return the object on success.
*/
exports.addTask = (req, res, next) => {
    res.status(201).json({
        task:
            // reference later for the db model
            {
                title: "CREATED TITLE", // short string
                duedate: "31/02/2047", // optional stuff as well
                description: "yep the date does not exist we'll talk about that later", // optional too
                priority: 5, // int range (0-5)
                link: null, // optional stuff
            }
    });
};

/*
    Function called with a PUT request, finds a task by ID
    and changes its data in the database, returning the 
    updated object on success.
*/
exports.updateTask = (req, res, next) => {
    const id = req.params.id;
    res.status(204);
};

/*
    Function called with a DELETE request.
    Deletes the post based on its ID.
*/
exports.deleteTask = (req, res, next) => {
    const id = req.params.id;
    res.status(204);
};