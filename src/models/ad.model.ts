
export interface Ad {
  id?: number;
  name:string;
  category: AdCategory;
  description: string
  price: number;
  picture: string;
  location: string;
  phoneNumber: number;
  stillAvailable: boolean;
  dateCreated?: Date;
  createdBy?: string;
}

export enum AdCategory {
  VEHICULES = 'VEHICULES',
  IMMOBILIER = 'IMMOBILIER',
  INFORMATIQUES_ET_MULTIMEDIA = 'INFORMATIQUES_ET_MULTIMEDIA',
}
