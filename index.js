module.exports.Converter = function(from, to = 'USD') {
    return new Promise((resolve, reject) => {
        if (from && to && (typeof from === "string") && (typeof to === "string")) {
            let apiAttribute = `${from.toLocaleUpperCase()}_${to.toLocaleUpperCase()}`;
            resolve(fetch(`http://free.currencyconverterapi.com/api/v5/convert?q=${apiAttribute}&compact=y`)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                if (JSON.stringify(myJson) && JSON.stringify(myJson[apiAttribute])) {
                    return JSON.stringify(myJson[apiAttribute].val);
                }
                return "someating wrong";
            })
            .catch(error => new Error(error)));
        }
        reject(new Error('"from" and "to" can have been only short string'));
    });
}
