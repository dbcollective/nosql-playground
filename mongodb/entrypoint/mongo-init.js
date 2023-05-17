db = db.getSiblingDB(process.env.MONGO_DATABASE);

db.createUser(
    {
        user: process.env.MONGO_USER,
        pwd: process.env.MONGO_PASSWORD,
        roles: [ 
            { 
                role: "readWrite", 
                db: process.env.MONGO_DATABASE 
            } 
        ]
    }
);

db.createCollection('users');
db.users.insert(
    [
        {
            name: "Max"
        }, 
        {
            name:"Alex"
        }
    ], 
    {
        ordered: false
    }
);