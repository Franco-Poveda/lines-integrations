'use strict'

const request = require('request');
const base64 = require('base-64');
var utf8 = require('utf8');

let pubKey,
    privKey,
    olpaysUri;

var init = (params) => {
    pubKey = params.pubKey;
    privKey = params.pubKey;
    olpaysUri = (params.sandbox) ?
        'https://sandbox.olpays.com/api/v1/' :
        'https://olpays.com/api/v1/';
}

var getPayments = (page, from, to) => {
    let getUri = olpaysUri + 'payments?page=' + page + '&from=' + form + '&to=' + to;
    var options = {
        uri: getUri,
        headers: {
            'Authorization': 'Basic ' + base64.encode(utf8.enconde(pubKey + ':' + privKey))
        },
        json: true // Automatically parses the JSON string in the response
    };
    return new Promise(function (resolve, reject) {
        rp(options)
            .then(function (parsedBody) {
                resolve(parsedBody);
            })
            .catch(function (err) {
                reject(err);
            });
    });

}


module.exports = {
    getPayments,
    init
}