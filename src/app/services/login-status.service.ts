import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { StorageModel } from "../core/models/auth/storage.model";
import { LoadingService } from "./loading.service";

@Injectable()
export class LoginStatusService {
  //user state
  public storageReporter: BehaviorSubject<StorageModel>;
  private storage: StorageModel;

  private storageKey: string;

  constructor() {
    this.storage = new StorageModel();

    this.storageKey = "wankar-data";

    this.storageReporter = new BehaviorSubject(this.storage);
  }

  public isLogged() {
    return this.storage.authorization_token != '';
  }

  public isAdmin() {
    return this.isLogged() && this.storage.rol == 'admin';
  }

  public isTeacher() {
    return this.isLogged() && this.storage.rol == 'teacher';
  }

  public isStudent() {
    return this.isLogged() && this.storage.rol == 'student';
  }

  public getStorage() {
    return this.storage;
  }

  public setStorage(value: any) {
    this.storage = value;
    this.save();
    this.storageReporter.next(this.storage);
  }

  public remove() {
    localStorage.removeItem(this.storageKey);
    this.storage = new StorageModel();
    this.storageReporter.next(this.storage);
  }

  public save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.storage));
  }

  public load() {
    var tmp = JSON.parse(localStorage.getItem(this.storageKey));

    if (tmp == null && !(tmp instanceof StorageModel)) {
      this.remove();
      return false;
    }

    this.setStorage(tmp as StorageModel);
  }
  
}
