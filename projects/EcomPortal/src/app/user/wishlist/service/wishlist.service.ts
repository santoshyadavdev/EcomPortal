import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../../material-shared/AppConfig';
import { IAppConfig } from '../../../material-shared/IAppConfig';
import { IResponse } from '../../../common/service/IResponse';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  getWishList() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/wishlist');
  }

  addProductToWishList(product: string) {
    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/wishlist', { productId: product });
  }
}
