const crypto = require('crypto');



////////////////// for encoding to SHA1 the given input///////////////////////////
async function encode(x) {
    try {
        return crypto.createHash('sha1').update(x).digest('hex');
    } catch (error) {
        console.log(error);
        throw error;
    }

};


module.exports = {
    encode
}