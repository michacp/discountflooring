import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { ServicesComponent } from './views/services/services.component';
import { ContactComponent } from './views/contact/contact.component';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'services',component:ServicesComponent },
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MainComponent,AboutusComponent,ServicesComponent,ContactComponent ]