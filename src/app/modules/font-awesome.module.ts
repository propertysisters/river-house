import { NgModule } from '@angular/core';

import { FontAwesomeModule as FontAwesome, FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBurger, faCircleInfo, faHome, faListCheck, faPersonHiking } from '@fortawesome/free-solid-svg-icons';

@NgModule
({
	imports: [ FontAwesome ],
	exports: [ FontAwesome ]
})
export class FontAwesomeModule
{
	constructor (faConfig: FaConfig, faLibrary: FaIconLibrary)
	{
		faLibrary.addIcons
		(
			faBars,
			faAirbnb,
			faHome,
			faBurger,
			faPersonHiking,
			faListCheck,
			faCircleInfo
		);
	}
}
