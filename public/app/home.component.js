System.register(['angular2/core', './row', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, row_1, http_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (row_1_1) {
                row_1 = row_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(http) {
                    this.http = http;
                    this.response = "";
                    this.Rows = new Array();
                    this.Rows.push(new row_1.Row());
                }
                HomeComponent.prototype.send = function (new_str, input) {
                    input.value = "";
                    var row = this.Rows[this.Rows.length - 1];
                    row.show = false;
                    row.response = new_str;
                    var params = JSON.stringify({ str: new_str });
                    var headers = new http_1.Headers();
                    headers.append('Authorization', 'Basic somethingsomethinghidden');
                    headers.append('X-SyncTimeout', '30');
                    headers.append('Accept', 'application/json');
                    headers.append('Cache-Control', 'no-cache');
                    headers.append('Content-Type', 'application/json');
                    this.http.post('http://localhost:3000/api', params, { headers: headers })
                        .subscribe(function (request) { return row.request = request.json().some; });
                    this.Rows.push(new row_1.Row());
                    this.response = "";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], HomeComponent.prototype, "Rows", void 0);
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: '/app/home.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map