import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    // { path: 'login', component: LoginComponent },
    {
        path: '',
        loadChildren: () => import('./layouts/layout.module').then((m) => m.LayoutModule),
    },
];

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }