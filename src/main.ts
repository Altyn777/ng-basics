import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // сигнализируем, что запускаем приложение в браузере

import { AppModule } from './app/app.module'; // класс
import { environment } from './environments/environment';

if (environment.production) { // по умолчанию false, в режиме разработки не вызываем функцию
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) // запускаем модуль
  .catch(err => console.error(err));
