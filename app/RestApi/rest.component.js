System.register([], function(exports_1) {
    var Rest;
    return {
        setters:[],
        execute: function() {
            Rest = (function () {
                function Rest(baseUrl, http) {
                    this.baseUrl = baseUrl;
                    this.http = http;
                }
                Rest.prototype.execute = function () {
                    var getStatement = this.http.get(this.baseUrl);
                    var prom = new Promise(function (resolve) {
                        return getStatement.subscribe(function (movies) { return resolve(movies.text()); });
                    });
                    return prom;
                    //return Promise.resolve(getStatement);
                    // return new Promise<string>(resolve => resolve(
                    //     getStatement.subscribe(() => {
                    //     
                    //     });
                    // ))
                    // 
                    //  return "";
                };
                Rest.prototype.getValue = function (something) {
                    return "";
                    // return new Promise<string>(resolve => {
                    //     this.http.get(this.baseUrl).subscribe(() => {
                    //     return "";
                    //     
                    // });
                    // );
                };
                return Rest;
            })();
            exports_1("Rest", Rest);
        }
    }
});
//# sourceMappingURL=rest.component.js.map