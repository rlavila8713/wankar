import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject } from "rxjs";

@Injectable()
export class LoadingService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private _loading: boolean = false;

    constructor() {
    }

    public get isLoading() {
        return this._loading;
    }

    public set isLoading(val: boolean) {
        this._loading = val;
        this.status.next(val);
    }

    public start() {
        this.isLoading = true;
    }

    public stop() {
        this.isLoading = false;
    }
}
