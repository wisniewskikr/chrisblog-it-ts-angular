import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: 'view/:id', component: ViewComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: 'delete/:id', component: DeleteComponent },
    { path: '**', component: NotFoundComponent }
];
