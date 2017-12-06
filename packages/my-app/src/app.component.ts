import {Component, OnInit} from '@angular/core';
import {NgProgress} from '@ngx-progressbar/core';


@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit
{


	private progress: NgProgress;


	constructor(progress: NgProgress)
	{
		this.progress = progress;
	}


	public ngOnInit(): void
	{
		this.progress.start();

		setTimeout(() => {
			this.progress.done();
		}, 5000);
	}

}
