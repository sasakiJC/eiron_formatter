import { Component, Input } from '@angular/core';

@Component({
  selector: 'eiron-formatter',
  templateUrl: './src/app/app.component.html',
	styleUrls: ['./src/app/app.component.css']
})
export class AppComponent {
	@Input() input:string;
	output:string;

	clicked() {
		this.output = this.input
			.replace(/(\w)-\r?\n/g, '$1')
			.replace(/\r?\n/g, ' ')
			.replace(/(\w)- /g, '$1')
			.replace(/(\.) ([A-Z])/g, '$1\r\n\r\n$2');
	}
}
