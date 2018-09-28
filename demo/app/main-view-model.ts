import { Observable } from 'tns-core-modules/data/observable';
import { Appsync } from 'nativescript-appsync';

export class HelloWorldModel extends Observable {
  public message: string;
  private appsync: Appsync;

  constructor() {
    super();

    this.appsync = new Appsync();
    this.message = this.appsync.message;
  }
}
