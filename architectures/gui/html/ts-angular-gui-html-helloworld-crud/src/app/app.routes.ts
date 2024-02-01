import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InitComponent } from './init/init.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: InitComponent },
    { path: 'init', component: InitComponent },
    { path: 'helloworld', component: HelloWorldComponent },
    { path: '**', component: NotFoundComponent }
];
