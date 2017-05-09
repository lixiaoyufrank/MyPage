import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {Profile}  from './components/profile/profile.component';
import {About}  from './components/about/about.component';

const appRoutes: Routes=[
	{
		path:'',
		component:Profile
	},
	{
		path:'about',
		component:About
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);