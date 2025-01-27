import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Editor Mobile'
    },
    {
        path: 'terms',
        component: TermsComponent,
        title: 'Termos e condições'
    },
    {
        path: '**',
        component: ErrorComponent,
        title: 'Página de Erro'
    }
];
