import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab21',
    loadChildren: () => import('./tab21/tab21.module').then( m => m.Tab21PageModule)
  },
  {
    path: 'task-dialog',
    loadChildren: () => import('./task-dialog/task-dialog.module').then( m => m.TaskDialogPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
