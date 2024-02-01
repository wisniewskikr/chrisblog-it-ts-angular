import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: '**', component: NotFoundComponent }
];
