import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: FirstComponent, pathMatch: 'full' },
  // {
  //   path: 'devfestfl', children: [
  //     {
  //       path: 'sessions', children: [
  //         { path: 'my-ally-cli', component: ThirdComponent },
  //         { path: 'become-angular-tailer', component: FourthComponent },
  //         { path: 'material-design', component: FirstComponent },
  //         { path: 'what-up-web', component: SecondComponent }
  //       ]
  //     },
  //     {
  //       path: 'speakers', children: [
  //         {
  //           path: 'michael-prentice', children: [
  //             { path: 'material-design', component: FirstComponent }
  //           ]
  //         },
  //         {
  //           path: 'stephen-fluin', children: [
  //             { path: 'what-up-web', component: SecondComponent }
  //           ]
  //         },
  //         {
  //           path: 'mike-brocchi', children: [
  //             { path: 'my-ally-cli', component: ThirdComponent },
  //             { path: 'become-angular-tailer', component: FourthComponent }
  //           ]
  //         },
  //       ]
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
