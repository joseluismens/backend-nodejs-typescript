import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';



@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {

  customers: Customer[] = [];

  representatives: Representative[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private customerService: CustomerService, private config: PrimeNGConfig) { }

  ngOnInit() {

    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      console.log(this.customers);

      this.loading = false;

      this.customers.forEach(
        (customer: any) => (customer.date = new Date(customer.date))
      );
    });

    this.representatives = [
      { name: "Amy Elsner", image: "amyelsner.png" },
      { name: "Anna Fali", image: "annafali.png" },
      { name: "Asiya Javayant", image: "asiyajavayant.png" },
      { name: "Bernardo Dominic", image: "bernardodominic.png" },
      { name: "Elwin Sharvill", image: "elwinsharvill.png" },
      { name: "Ioni Bowcher", image: "ionibowcher.png" },
      { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
      { name: "Onyama Limba", image: "onyamalimba.png" },
      { name: "Stephen Shaw", image: "stephenshaw.png" },
      { name: "XuXue Feng", image: "xuxuefeng.png" }
    ];

    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" },
      { label: "New", value: "new" },
      { label: "Negotiation", value: "negotiation" },
      { label: "Renewal", value: "renewal" },
      { label: "Proposal", value: "proposal" }
    ];
  }
}





