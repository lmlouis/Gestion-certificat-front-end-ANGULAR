import { Certificat } from '../certificat/certificat';
export class Profile {
  constructor(
  public userId?:number,
  public userEmail?:string,
  public userPassword?:string,
  public userName?:string,
  public userStatus?:string,
  public userRole?:string,
  public userCertificat?:Certificat){}
}
