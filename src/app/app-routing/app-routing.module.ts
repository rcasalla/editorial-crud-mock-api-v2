import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EditorialDetailComponent } from "../editorial/editorial-detail/editorial-detail.component";
import { EditorialListComponent } from "../editorial/editorial-list/editorial-list.component";
import { EditorialCreateComponent } from "../editorial/editorial-create/editorial-create.component";

const routes: Routes = [
  {
    path: 'editorials',
    children: [{
    path:'list',
    component: EditorialListComponent
  },
  {
    path: 'add',
    component: EditorialCreateComponent,
    outlet: 'right'
  },
  {
    path: ':id',
    component: EditorialDetailComponent,
    outlet: 'right'
  }
  
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
