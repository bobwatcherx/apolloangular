import {NgModule} from '@angular/core';
import {HomeComponent} from './app-home/home.component';

@NgModule({
	declarations:[HomeComponent],
	exports:[HomeComponent]
})
export class PagesModule {}