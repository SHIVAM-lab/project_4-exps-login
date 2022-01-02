const fun = require('./function');
const enc = require('./encryption');

async function login(x) {
    try {
        var a = x.email;
        var b = x.password;
        var find = await fun.query_exec(`select * from ep_users where Email = '${a}'`);
        var dec_pass = await enc.encode(b);
        if (find.length == 0) {
            return ({
                "status": 0,
                "message": "Invalid Credentials!",
                "error": "Failed"

            });
        } else if (dec_pass == find[0].password) {
            return ({
                'status': 1,
                'message': 'Login successful!',
                'userid': find[0].user_id,
                'username': find[0].username
            });
        } else {
            return ({
                "status": 0,
                "message": "Incorrect Password!",
                "error": "Failed"
            });
        }
    } catch (error) {
        if (error) {
            console.log(error);
            return error;
        }
    }
}

module.exports = {
    login
}