import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({ // декоратор, название сущности (синтаксис ts; это f, которая оборачивает класс, делая его модулем)
  declarations: [ // модуль регистрирует компоненты
    AppComponent
  ],
  imports: [ // ...и другие модули
    BrowserModule // этот позволяет работать в браузере
  ],
  providers: [], // тут хранятся различные сервисы, интерсептеры
  bootstrap: [AppComponent] // все приложение стартует с этого компонента
})
export class AppModule { }
