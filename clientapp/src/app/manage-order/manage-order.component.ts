import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  orders:any={};
  ordersCount=0;
  pendingCount=0;
  completedCount=0;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrder().subscribe(orders => {
      this.orders = orders;
      this.ordersCount =  this.orders.length;

      for(let order in orders){
        if(orders[order].completed == 'false'){
          this.pendingCount += 1;
        }
      }
      this.completedCount = this.ordersCount - this.pendingCount;

    });
  }

}
