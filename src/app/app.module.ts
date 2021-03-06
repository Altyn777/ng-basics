import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component'

@NgModule({ // декоратор, название сущности (синтаксис ts; это f, которая оборачивает класс, делая его модулем)
  declarations: [ // модуль регистрирует компоненты
    AppComponent,
    CardComponent,
    FormComponent,
  ],
  imports: [ // ...и другие модули
    BrowserModule, // этот позволяет работать в браузере
    FormsModule, // позволяет работать с формами, есть ngModule
  ],
  providers: [], // тут хранятся различные сервисы, интерсептеры
  bootstrap: [AppComponent] // все приложение стартует с этого компонента
})
export class AppModule { }
