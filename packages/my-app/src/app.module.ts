import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgProgressModule} from '@ngx-progressbar/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home';


@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgProgressModule.forRoot(),
	],
	declarations: [
		AppComponent,
		HomeComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
