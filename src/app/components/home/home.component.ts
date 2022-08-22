import { Component } from '@angular/core';

@Component
({
	selector: 'app-public-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent
{
	slides: string[] = 
	[
		"assets/images/cover.jpg",
		"assets/images/air.jpg"
	]
}
