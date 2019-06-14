import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';

import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'app/seguranca/auth.service';

import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from './../pessoas/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { CategoriaService } from './../categorias/categoria.service';
import { DashboardService } from './../dashboard/dashboard.service';
import { RelatoriosService } from './../relatorios/relatorios.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { MoneyHttp } from 'app/seguranca/money-http';

registerLocaleData(localePt);


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    GrowlModule,
    ConfirmDialogModule,
  ],
  declarations: [ NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent],
  exports: [
    NavbarComponent,
    GrowlModule,
    ConfirmDialogModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    DashboardService,
    ErrorHandlerService,
    RelatoriosService,
    AuthService,
    JwtHelperService,
    Title,
    MoneyHttp,

    ConfirmationService,
    MessageService,
    NaoAutorizadoComponent,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
