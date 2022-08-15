import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule
({
	imports:
	[
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		DragDropModule
	],
	exports:
	[
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		DragDropModule
	]
})
export class AngularModule { }
