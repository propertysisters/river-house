import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class ResponsiveService
{
	isMobile: boolean = false;

	constructor
	(
		private breakpointObserver: BreakpointObserver,
	)
	{
		this.breakpointObserver
			.observe([ Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait ])
			.subscribe(result => this.isMobile = result.matches);
	}
}