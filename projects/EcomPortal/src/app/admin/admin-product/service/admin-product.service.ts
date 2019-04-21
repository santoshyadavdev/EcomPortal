import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../../material-shared/AppConfig';
import { IAppConfig } from '../../../material-shared/IAppConfig';
import { IResponse } from '../../../common/service/IResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }


  addProduct(imageUrl: File, product: any) {
    const formData = new FormData();

    formData.append('file', imageUrl, imageUrl.name);
    formData.append('productName', product.productName);
    formData.append('category', product.category);
    formData.append('description', product.description);
    formData.append('price', product.price);

    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/product', formData);
  }


  getProductList() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/product');
  }
}
