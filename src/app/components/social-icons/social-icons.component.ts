import { Component } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

class SocialIcon
{
	url: string;
	icon: IconName;
	tooltip: string;
}

@Component
({
	selector: 'app-social-icons',
	templateUrl: './social-icons.component.html',
	styleUrls: [ './social-icons.component.scss' ]
})
export class SocialIconsComponent
{
	socialButtons: SocialIcon[] = 
	[
		{
			url: "https://www.airbnb.com",
			icon: "airbnb",
			tooltip: "AirBnB"
		},
		//{
		//	url: "https://www.vrbo.com",
		//	icon: "vrbo",
		//	tooltip: "VRBO"
		//},
	]
}
