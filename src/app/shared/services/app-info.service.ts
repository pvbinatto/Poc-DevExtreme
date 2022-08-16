import { Injectable } from '@angular/core';

@Injectable()
export class Customer {
  ID: number;
  CompanyName: string;
  Zipcode: number;
  Website: string;
}

export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Core Application';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }

  getCustomers() {
    let customers: Customer[] = [
      {
        ID: 1,
        CompanyName: 'Super Mart of the West',
        Zipcode: 72716,
        Website: 'http://www.nowebsitesupermart.com',
      },
      {
        ID: 2,
        CompanyName: 'Electronics Depot',
        Zipcode: 30339,
        Website: 'http://www.nowebsitedepot.com',
      },
      {
        ID: 3,
        CompanyName: 'K&S Music',
        Zipcode: 55403,
        Website: 'http://www.nowebsitemusic.com',
      },
    ];

    return customers;
  }
}
