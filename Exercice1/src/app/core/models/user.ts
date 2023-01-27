
export class User {

  private name! : string;
  private username! : string ;
  private email! : string ;
  private phone! : number ;
  private website! : string ;


  constructor(name:string,username:string,email:string,phone:number,website:string){
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.website = website;
  }

  // setter function
  public setName(name:string) : void{
    this.name = name ;
  }
  public setUserName(username:string) : void{
    this.username = username
  }
  public setEmail(email:string) : void{
    this.email = email
  }

  public setPhone(phone:number) : void{
    this.phone = phone
  }
  public setWebsite(website:string) :void {
    this.website = website
  }

  //guetter function
  public getName() : string{
    return this.name
  }
  public getUserName() : string{
    return this.username
  }
  public getEmail() : string{
    return this.email
  }
  public getPhne() : number{
    return this.phone
  }
  public getWebsite() :string {
    return this.website
  }
}
