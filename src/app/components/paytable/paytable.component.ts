import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { OrdersService } from 'src/app/services/orders.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProcessAlertComponent } from '../process-alert/process-alert.component';

@Component({
  selector: 'app-paytable',
  templateUrl: './paytable.component.html',
  styleUrls: ['./paytable.component.scss']
})
export class PaytableComponent implements OnInit {

  constructor(private ordersService: OrdersService, private ngxUiLoaderService: NgxUiLoaderService, public dialog: MatDialog) { }
  protected orders: any[] = []
  protected dtOptions: DataTables.Settings[] = [];
  protected chargedData: boolean = false;
  searchValue = "";

  ngOnInit() {
    this.chargedData = false
    setTimeout(() => {
      this.doRefresh();
      this.chargedData = true;
    }, 2000);
  }

  buildDtOptions(data: any) {
    return {
      data: data,
      columns: [
        {
          title: 'Sku',
          data: 'sku',
        },
        {
          title: 'Name',
          data: 'name',
        },
        {
          title: 'Quantity',
          data: 'quantity',
        },
        {
          title: 'Price',
          data: 'price',
        }
      ]

    }
  }

  openLoader() {
    this.ngxUiLoaderService.start()
    setTimeout(() => {
      this.ngxUiLoaderService.stop()
      this.dialog.open(ProcessAlertComponent, {
        height: "270px",
        width: "270px",
        data: {}
      });
    }, 1000);
  }

  openProductFormModal(order: string, orderArray: number) {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: { order: order, orderArray: orderArray }
    });
    
    dialogRef.afterClosed().subscribe(() => {
      this.doRefresh()
    });
  }

  doRefresh() {
    if (!localStorage.getItem('orders')) {
      this.ordersService.getOrders().subscribe((callback: any) => {
        this.orders = callback.orders
        for (let index = 0; index < this.orders.length; index++) {
          this.dtOptions[index] = this.buildDtOptions(this.orders[index].items);
        }

        localStorage.setItem('orders', JSON.stringify(callback.orders));
      })
    } else {
      this.orders = JSON.parse(localStorage.getItem('orders')!)

      for (let index = 0; index < this.orders.length; index++) {
        this.dtOptions[index] = this.buildDtOptions(this.orders[index].items);
      }

    }
  }

  filter() {
    this.orders = JSON.parse(localStorage.getItem('orders')!)
    this.orders = this.orders.filter(order => order.number.includes(this.searchValue))
  }

}
