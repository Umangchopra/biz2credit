import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedServiceService {
    private componentMethodCallSource = new Subject<any>();
    componentMethodCalled$ = this.componentMethodCallSource.asObservable();

    constructor() { }

    // Service message commands
    callComponentMethod(count: boolean) {
        this.componentMethodCallSource.next({ count: count });
    }

}
