import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HikingDiaryComponent } from '../app/hiking-diary/hiking-diary.component'; 
import { HikingEditComponent } from '../app/hiking-diary/hiking-edit/hiking-edit.component';
import { HikingDetailComponent } from '../app/hiking-diary/hiking-detail/hiking-detail.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/hikes', pathMatch: 'full'},
    {
        path: 'hikes', component: HikingDiaryComponent, children:
        [
        { path: 'new', component: HikingEditComponent },
        { path: ':id', component: HikingDetailComponent },
        { path: ':id/edit', component: HikingEditComponent }
        ]
    },
    

];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}


