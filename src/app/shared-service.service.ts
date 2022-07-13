import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedServiceService {
    private componentMethodCallSource = new Subject<any>();
    componentMethodCalled$ = this.componentMethodCallSource.asObservable();

    constructor() { }

    // Service message commands
    callComponentMethod(val: boolean) {
        this.componentMethodCallSource.next({ value: val });
    }

}
