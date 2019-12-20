const request = require('request');
const {promisify} = require('util');

const promisifiedRequest = promisify(request);

const getDogs = async () => {
    let data = await promisifiedRequest({
        uri: `https://api.petfinder.com/v2/animals?type=dog&status=adoptable&APPID=${process.env.APPID}`,
        json: true
    });
    
    return data.body;
}

module.exports = getDogs