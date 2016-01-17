System.register([], function(exports_1) {
    var Rest, RestRequest;
    return {
        setters:[],
        execute: function() {
            Rest = (function () {
                function Rest(baseUrl, http) {
                    this.baseUrl = baseUrl;
                    this.http = http;
                }
                Rest.prototype.executeRequest = function (request) {
                    var getStatement = this.http.get(this.getFullUrl(request.params));
                    var prom = new Promise(function (resolve) {
                        return getStatement.subscribe((function (movies) {
                            window.console.log(movies.json());
                            resolve(movies.json());
                        }));
                    });
                    return prom;
                };
                Rest.prototype.getFullUrl = function (params) {
                    var isFirst = true;
                    var queryString = '?';
                    for (var key in params) {
                        if (!isFirst)
                            queryString += '&';
                        else
                            isFirst = false;
                        queryString += key + '=' + params[key];
                    }
                    return this.baseUrl + queryString;
                };
                return Rest;
            })();
            exports_1("Rest", Rest);
            RestRequest = (function () {
                function RestRequest() {
                    this.params = {};
                }
                return RestRequest;
            })();
            exports_1("RestRequest", RestRequest);
        }
    }
});
//# sourceMappingURL=rest.component.js.map