import { InjectionToken } from '@angular/core';
import { IAppConfig } from './IAppConfig';

export const APP_CONFIG = new InjectionToken<IAppConfig>('config');
