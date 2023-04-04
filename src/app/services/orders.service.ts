import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl: string = "https://eshop-deve.herokuapp.com/api/v2"
  private token: string = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ"
  private headers: HttpHeaders = new HttpHeaders({ 'Authorization': this.token })

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(`${this.apiUrl}/orders`, { headers: this.headers })
  }

  addItemToOrder(item: any) {
    const request = {
      "$push": {
        items: item
      }

    }
    return this.http.put(`${this.apiUrl}/orders`, request, { headers: this.headers })
  }
}
