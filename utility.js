const statusCode = {
    SUCCESS:100,
    CREATE:101,
    READ:102,
    UPDATE:103,
    DELETE:104,
    DB_CONNECTED:105,
    DB_CREATE:106,
    DB_READ:107,
    DB_UPDATE:108,
    DB_DELETE:109,

    FAILED:200,
    CREATE_ERROR:201,
    READ_ERROR:202,
    UPDATE_ERROR:203,
    DELETE_ERROR:204,
    DB_CONNECTED_ERROR:205,
    DB_CREATE_ERROR:206,
    DB_READ_ERROR:207,
    DB_UPDATE_ERROR:208,
    DB_DELETE_ERROR:209
}

const message = {
    SUCCESS:"Success",
    CREATE:"Created ",
    READ:"Read ",
    UPDATE:"Updated ",
    DELETE:"Deleted",
    DB_CONNECTED:"DB connected successfully",
    DB_CREATE:"DB Created ",
    DB_READ:"DB Read ",
    DB_UPDATE:"DB Updated ",
    DB_DELETE:"DB Deleted",

    FAILED:"Failed",
    CREATE_ERROR:"Failed to create ",
    READ_ERROR:"Failed to read ",
    UPDATE_ERROR:"Failed to update ",
    DELETE_ERROR:"Failed to delete ",
    DB_CONNECTED_ERROR:"DB failed to connected",
    DB_CREATE_ERROR:"DB failed to create ",
    DB_READ_ERROR:"DB failed to read ",
    DB_UPDATE_ERROR:"DB failed to update ",
    DB_DELETE_ERROR:"DB failed to delete "
}

const validateNullCheck = (value=null) => {
    if(value===null || value===undefined || value === "" || value === []){
        return false;
    }
    return true;
}

const consoleAndReply = (statusCode,message,body=null) =>{
    console.log({statusCode,message,body})
    return {statusCode,message,body};
}

module.exports = {
    statusCode,
    message,
    validateNullCheck,
    consoleAndReply
}