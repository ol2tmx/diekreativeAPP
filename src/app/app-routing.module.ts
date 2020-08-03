import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-modal',
    loadChildren: () => import('./login-modal/login-modal.module').then( m => m.LoginModalPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'predigten-video',
    loadChildren: () => import('./predigten-video/predigten-video.module').then( m => m.PredigtenVideoPageModule)
  },
  {
    path: 'predigten-audio',
    loadChildren: () => import('./predigten-audio/predigten-audio.module').then( m => m.PredigtenAudioPageModule)
  },
  {
    path: 'predigten-audio-details',
    loadChildren: () => import('./predigten-audio-details/predigten-audio-details.module').then( m => m.PredigtenAudioDetailsPageModule)
  },
  {
    path: 'dummytab',
    loadChildren: () => import('./dummytab/dummytab.module').then( m => m.DummytabPageModule)
  },
  {
    path: 'lifegroups',
    loadChildren: () => import('./lifegroups/lifegroups.module').then( m => m.LifegroupsPageModule)
  },  {
    path: 'calender-prayer-room',
    loadChildren: () => import('./calender-prayer-room/calender-prayer-room.module').then( m => m.CalenderPrayerRoomPageModule)
  },
  {
    path: 'test-site',
    loadChildren: () => import('./test-site/test-site.module').then( m => m.TestSitePageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
