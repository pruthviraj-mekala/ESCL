import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsBulletinComponent } from './news-bulletin/news-bulletin.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel/image-carousel.component';
import { AlertModule, CarouselModule } from '@coreui/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ImageSliderComponent,
    NewsBulletinComponent,
    ImageCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   AlertModule,
   CarouselModule,
   BrowserAnimationsModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatIconModule,
   MatCardModule
  ],
  providers: [ provideAnimations() ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
