import { Component, Inject, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';
import { PaytableComponent } from '../paytable/paytable.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  order!: string;
  orderArray: number = 0;
  
  protected productForm: FormGroup = new FormGroup({
    sku: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  })

  get sku() {
    return this.productForm.get('sku')
  }

  get name() {
    return this.productForm.get('name')
  }

  get quantity() {
    return this.productForm.get('quantity')
  }

  get price() {
    return this.productForm.get('price')
  }

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    private ordersService: OrdersService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.order = data.order;
    this.orderArray = data.orderArray
  }

  addItemToOrder() {
    if(this.productForm.valid) {
      let orders = JSON.parse(localStorage.getItem('orders')!)
      orders[Number(this.orderArray)].items.push(this.productForm.value)
      localStorage.setItem('orders', JSON.stringify(orders))
      this.dialogRef.close()
    }
    //if(this.productForm.valid) this.ordersService.addItemToOrder(this.productForm.value).subscribe((callback) => {console.log(callback)})
  }
}
