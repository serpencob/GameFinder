import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {SelectedComponent} from "./selected/selected.component";

const appRoutes: Routes = [
  {path:'', component:ListComponent},
  {path:'game/:id', component:SelectedComponent}
];

export const routing  = RouterModule.forRoot(appRoutes);
