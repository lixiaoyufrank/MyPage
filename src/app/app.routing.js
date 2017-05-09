"use strict";
var router_1 = require("@angular/router");
var profile_component_1 = require("./components/profile/profile.component");
var about_component_1 = require("./components/about/about.component");
var appRoutes = [
    {
        path: '',
        component: profile_component_1.Profile
    },
    {
        path: 'about',
        component: about_component_1.About
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map