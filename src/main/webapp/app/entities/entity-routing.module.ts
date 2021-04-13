import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'innkeeper',
        data: { pageTitle: 'jhSweetHomeDinnerApplicationApp.innkeeper.home.title' },
        loadChildren: () => import('./innkeeper/innkeeper.module').then(m => m.InnkeeperModule),
      },
      {
        path: 'shared-dinner',
        data: { pageTitle: 'jhSweetHomeDinnerApplicationApp.sharedDinner.home.title' },
        loadChildren: () => import('./shared-dinner/shared-dinner.module').then(m => m.SharedDinnerModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
