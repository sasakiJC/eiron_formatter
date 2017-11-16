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
		this.output = this.input.replace(/\r?\n/g, ' ');
		console.log(this.output);
	}
}
