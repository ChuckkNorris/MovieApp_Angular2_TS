System.register([], function(exports_1) {
    var RestApi, RestRequest;
    return {
        setters:[],
        execute: function() {
            RestApi = (function () {
                function RestApi(baseUrl, http) {
                    this.baseUrl = baseUrl;
                    this.http = http;
                    this.globalParameters = {};
                }
                RestApi.prototype.executeRequest = function (request) {
                    var getStatement = this.http.get(this.getFullUrl(request));
                    var promiseToReturn = new Promise(function (resolve) {
                        return getStatement.subscribe((function (response) {
                            window.console.log(response.json());
                            resolve(response.json());
                        }));
                    });
                    return promiseToReturn;
                };
                RestApi.prototype.getFullUrl = function (restRequest) {
                    var toReturn = this.baseUrl;
                    var isFirst = true;
                    if (restRequest.endPoint != undefined)
                        toReturn += restRequest.endPoint;
                    var queryString = '?';
                    for (var key in this.globalParameters) {
                        if (!isFirst)
                            queryString += '&';
                        else
                            isFirst = false;
                        queryString += key + '=' + this.globalParameters[key];
                    }
                    for (var key in restRequest.params) {
                        if (!isFirst)
                            queryString += '&';
                        else
                            isFirst = false;
                        queryString += key + '=' + restRequest.params[key];
                    }
                    window.console.log('REST URL: ' + toReturn + queryString);
                    return toReturn + queryString;
                };
                return RestApi;
            })();
            exports_1("RestApi", RestApi);
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
//# sourceMappingURL=rest-api.component.js.map