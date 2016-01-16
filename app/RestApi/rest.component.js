System.register([], function(exports_1) {
    var Rest;
    return {
        setters:[],
        execute: function() {
            Rest = (function () {
                function Rest(baseUrl, http) {
                    this.baseUrl = baseUrl;
                    this.http = http;
                    this.params = {};
                }
                Rest.prototype.execute = function () {
                    var getStatement = this.http.get(this.getFullUrl());
                    var prom = new Promise(function (resolve) {
                        return getStatement.subscribe(function (movies) { return resolve(movies.text()); });
                    });
                    return prom;
                };
                Rest.prototype.getFullUrl = function () {
                    var isFirst = true;
                    var queryString = '?';
                    for (var key in this.params) {
                        if (!isFirst)
                            queryString += '&';
                        else
                            isFirst = false;
                        queryString += key + '=' + this.params[key];
                    }
                    window.console.log(queryString);
                    return this.baseUrl + queryString;
                };
                return Rest;
            })();
            exports_1("Rest", Rest);
        }
    }
});
//# sourceMappingURL=rest.component.js.map