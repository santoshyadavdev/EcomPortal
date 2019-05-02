import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_CONFIG } from '../../../material-shared/AppConfig';
import { IAppConfig } from '../../../material-shared/IAppConfig';
import { IResponse } from '../../../common/service/IResponse';
@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  getAllOrders() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/order/admin');
  }

  updateOrderStatus(orderDetails: any) {
    return this.http.put<IResponse>(this.appConfig.apiEndPoint + '/order', orderDetails);
  }

  gerOrderDetails(orderId: any) {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/order/' + orderId);
  }

}
