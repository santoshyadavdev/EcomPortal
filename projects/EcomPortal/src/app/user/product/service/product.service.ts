import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../../material-shared/AppConfig';
import { IAppConfig } from '../../../material-shared/IAppConfig';
import { IResponse } from '../../../common/service/IResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  getAllProducts() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/product');
  }

  getProductByCategory(categoryName: string) {
    return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/product/getProductByCategory', { category: categoryName });
  }

  getProductById(id: any) {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/product/' + id);
  }
}
