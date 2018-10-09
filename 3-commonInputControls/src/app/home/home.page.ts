import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    buttonCounter = 0;
    textArea = '';
    switch1 = true;
    switch1State = 'ON';
    textField = '';
    rangeValue = 0.5;

    ngOnInit() {
        this.updateTextArea();
    }

    buttonClick() {
        this.buttonCounter += 1;
        this.updateTextArea();
    }

    updateTextArea() {
        let output = 'The button has been clicked ' + this.buttonCounter + ' times\n';
        if (this.switch1) {
            output += 'The switch is ON!\n';
        } else {
            output += 'The switch is OFF.\n';
        }
        output += 'Text field: "' + this.textField + '"\n';
        output += 'Range value: ' + this.rangeValue + '\n';

        this.textArea = output;
    }

    toggleChange() {
        this.switch1State = this.switch1 ? 'ON' : 'OFF';
        this.updateTextArea();
    }

    textFieldChange(value) {
        this.textField = value;
        this.updateTextArea();
    }

    rangeChange() {
        this.updateTextArea();
    }
}
