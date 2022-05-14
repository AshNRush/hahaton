export class AuthModel {
  public phone: string;
  public name: string;
  public type: string;

  constructor(phone: string, name: string, type: string) {
    this.phone = phone
    this.name = name
    this.type = type
  }
}
