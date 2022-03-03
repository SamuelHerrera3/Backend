const user = process.env.USER_DB;
const password = process.env.PASS_DB;
const database = 'nodeDB';

module.exports = {
    cloud_db: `mongodb+srv://${user}:${password}@misiontic.5g1my.mongodb.net/${database}`,
    local_db: `mongodb://localhost:27017/${database}        `
}
