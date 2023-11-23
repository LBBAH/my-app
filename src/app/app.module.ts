import { APP_INITIALIZER, ErrorHandler, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvisoPrivacidadComponent } from './components/aviso-privacidad/aviso-privacidad.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContacUsComponent } from './components/contac-us/contac-us.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { DonacionComponent } from './components/donacion/donacion.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RecursoComponent } from './components/recurso/recurso.component';
import { PreguntasFComponent } from './components/preguntas-f/preguntas-f.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuestionSecretPasswordComponent } from './components/question-secret-password/question-secret-password.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';

import { NgxCaptchaModule } from 'ngx-captcha';
import { AlertNewQuestionSecretComponent } from './components/alert-new-question-secret/alert-new-question-secret.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NewCursoComponent } from './components/new-curso/new-curso.component';
import { EditCursoIdComponent } from './components/edit-curso-id/edit-curso-id.component';
import { InfoRecursoIdComponent } from './components/info-recurso-id/info-recurso-id.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { Error400Component } from './components/error400/error400.component';
import { Error500Component } from './components/error500/error500.component';
import { StickyMessageComponent } from './components/sticky-message/sticky-message.component';
import { BannerComponent } from './components/banner/banner.component';

import { ImgUserComponent } from './components/img-user/img-user.component';
import { ImgBackgroundUserComponent } from './components/img-background-user/img-background-user.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { EditObjetivoComponent } from './components/edit-objetivo/edit-objetivo.component';
import { EditSeccionComponent } from './components/edit-seccion/edit-seccion.component';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { NgxPayPalModule } from 'ngx-paypal';

import * as Sentry from "@sentry/angular-ivy";
import { ReproducirCursosComponent } from './components/reproducir-cursos/reproducir-cursos.component';
import { VideoComponent } from './components/video/video.component';
import { SatisfaccionFeedBackComponent } from './components/satisfaccion-feed-back/satisfaccion-feed-back.component';
import { ServiceWorkerModule } from '@angular/service-worker';



const routes: Routes =[
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent },
  {path:'avisoPrivacidad', component:AvisoPrivacidadComponent },
  {path:'chat', component:ChatComponent },
  {path:'contactUs', component:ContacUsComponent },
  {path:'donacion', component:DonacionComponent },
  {path:'editUser', component:EditUserComponent },
  {path:'login', component:LoginComponent },
  {path:'quienesSomos', component:QuienesSomosComponent },
  {path:'recursos', component:RecursosComponent },
  {path:'singIn', component:RegistroComponent },
  {path:'recurso/:id',component:RecursoComponent },
  {path: 'preguntasf', component:PreguntasFComponent},
  {path: 'preguntaSecreta', component:QuestionSecretPasswordComponent},
  {path: 'perfilU/:id', component:PerfilUsuarioComponent},
  {path: 'editCursoid/:id', component:EditCursoIdComponent},
  {path: 'infoRecurso/:id', component:InfoRecursoIdComponent},
  {path:'reproducirCurso/:id', component:ReproducirCursosComponent },
  {path:'vide/:id', component:VideoComponent},
  { path: '400', component: Error400Component},
  { path: '500', component: Error500Component},
  { path: '**', component:NotFountComponent },    
];

@NgModule({
  declarations: [
    AppComponent,      
    HomeComponent,
    SearchComponent,
    FooterComponent,
    FiltroComponent,
    ChatComponent, 
    ContacUsComponent,
    DonacionComponent,
    RegistroComponent,
    AvisoPrivacidadComponent,
    LoginComponent,
    RecursosComponent,
    RecursoComponent,
    PreguntasFComponent,
    ScrollToTopComponent,
    MenuComponent,
    QuestionSecretPasswordComponent,
    PerfilUsuarioComponent,
    EditUserComponent,
    AlertNewQuestionSecretComponent,
    ChangePasswordComponent,
    NewCursoComponent,        
    InfoRecursoIdComponent,
    StickyMessageComponent,
    BannerComponent,
    Error400Component,
    Error500Component,
    NotFountComponent,
    QuienesSomosComponent,
    ImgUserComponent,
    ImgBackgroundUserComponent,   
    EditObjetivoComponent,
    EditSeccionComponent,
    EditCursoIdComponent,
    ReproducirCursosComponent,
    VideoComponent,
    SatisfaccionFeedBackComponent
  ],
  imports: [        
    BrowserModule,    
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule, 
    AppRoutingModule,  
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    CommonModule,
    RecaptchaV3Module,
    HttpClientModule, 
    YouTubePlayerModule,               
    NgxPayPalModule,
    RouterModule.forRoot( 
      routes, { preloadingStrategy: PreloadAllModules }
    ),
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [

    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: 'pon_la_key_de_google',
    }
  ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
