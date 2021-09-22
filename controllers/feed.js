// NOTE: 
/*
    Function called with a GET request, returns an array of tasks
    related to the specific user that requested it.
*/
exports.getTasks = (req, res, next) => {};

/*
    Function called with a GET request, returns a single task
    related to the specific user that requested it, based on
    the ID sent with the request.
*/
exports.getSingleTask = (req,res,next) => {};

/*
    Function called with a POST request, creates a new task
    object based on a mongoose model, relate it to the user,
    and return the object on success.
*/
exports.addTask = (req, res, next) => {};

/*
    Function called with a PATCH request, finds a task by ID
    and changes its data in the database, returning the 
    updated object on success.
*/
exports.updateTask = (req, res, next) => {};

/*
    Function called with a DELETE request.
    Deletes the post based on its ID.
*/
exports.deleteTask = (req, res, next) => {};