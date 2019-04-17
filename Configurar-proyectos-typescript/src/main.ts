import { Product, products } from './product';
import { Client } from './client';
import { Observable, interval } from 'rxjs'

import * as _ from 'lodash';

new Product();
new Client();

class Main {

    timer$: Observable<number>;

    constructor() {
        console.log("class main =)");
        this.timer$ = interval(1000);

        this.timer$.subscribe(
            data => console.log('-->', data),
            error => console.log(error)
        )
    }
}
console.log('¿Es arreglo? ', _.isArray(products))

new Main();

