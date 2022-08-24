import { Component } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { ResponsiveService } from './services/responsive.service';

export class NavigationButton
{
	title: string;
	icon: IconName;
	summary: string;
	route: string;
	children?: NavigationButton[];
}

@Component
({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent
{
	title = 'river-house';
	
	navigationButtons: NavigationButton[] =
	[
		{
			title: "Welcome!",
			icon: "home",
			summary: "General Info about the cabin",
			route: "welcome"
		},
		{
			title: "Cabin Amenities",
			icon: "circle-info",
			summary: "Things to do around the cabin",
			route: "amenities",
			children:
			[
			]
		},
		{
			title: "Checkout Checklist",
			icon: "list-check",
			summary: "Information about checking out",
			route: "checklist"
		},
		{
			title: "Local Activities",
			icon: "person-hiking",
			summary: "Hikes and other adventures in the area",
			route: "activities"
		},
		{
			title: "Eats & Drinks",
			icon: "burger",
			summary: "Places to patron around town",
			route: "food"
		}
	];
	
	constructor
	(
		public responsiveService: ResponsiveService
	) { }
}
