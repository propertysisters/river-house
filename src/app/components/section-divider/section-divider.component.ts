import { Component, Input } from '@angular/core';

@Component
({
	selector: 'app-section-divider',
	templateUrl: './section-divider.component.html',
	styleUrls: [ './section-divider.component.scss' ]
})
export class SectionDividerComponent
{
	@Input() label: string;
}
