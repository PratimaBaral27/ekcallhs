import {Component} from '@angular/core'
@Component({

    selector: "my-customer",
    templateUrl: 'app/customer/Customer.component'
})

export class CustomerComponent {
    firstName: String = "Bimal";
    lastName: String = "Bastola";
    gender: String = "Male";
    age: number = 29;
}