import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-pub',
  templateUrl: './modal-pub.component.html',
  styleUrls: ['./modal-pub.component.css']
})
export class ModalPubComponent {
  types = [
    { value: 'Conf', viewValue: 'Conf' },
    { value: 'Journal', viewValue: 'Journal' },
    { value: 'Magazine', viewValue: 'Magazine' }
  ];
}
