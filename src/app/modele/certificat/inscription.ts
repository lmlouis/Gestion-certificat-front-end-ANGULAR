import { Certificat } from './certificat';
import { Profile } from '../user/profile';
export class Inscription {
  constructor(public certificat:Certificat, public beneficiaire:Profile){}
}
