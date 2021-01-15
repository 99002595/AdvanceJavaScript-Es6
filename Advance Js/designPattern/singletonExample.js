/* the singleton design pattern lets us create no more than a single instance of a class.
It is commonly used for creating database connections, setting up a logger for an application. 
The configuration-related stuff should execute only once and should be reused until the application is live.*/
let dbInstance = null

function getDBConn () {
    if (!dbInstance) {
        dbInstance = new DB() // Creating an instance of DB class and storing it in the global variable dbInstance
    }
    return dbInstance
}

function useDBConn () {
    let dbObj = getDBConn()
    /* --- */
}

function f1 () {
    let dbObj = getDBConn()
    /* --- */
}

function f2 () {
    let dbObj = getDBConn()
    /* --- */
}