import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FontAwesomeModule } from './modules/font-awesome.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { MatCarouselComponent } from './components/carousel/carousel.component';
import { MatCarouselSlideComponent } from './components/carousel/carousel-slide/carousel-slide.component';
import { SectionDividerComponent } from './components/section-divider/section-divider.component';

@NgModule
({
	declarations:
	[
		AppComponent,
		HomeComponent,
		SocialIconsComponent,
		SectionDividerComponent,
		MatCarouselComponent,
		MatCarouselSlideComponent
	],
	imports:
	[
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
