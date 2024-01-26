import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InitComponent } from './init/init.component';

export const routes: Routes = [
    { path: 'init', component: InitComponent },
    { path: 'helloworld', component: HelloWorldComponent },
];
