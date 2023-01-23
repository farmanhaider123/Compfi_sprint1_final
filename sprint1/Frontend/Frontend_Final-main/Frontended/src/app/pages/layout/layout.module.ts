import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
  NbSelectModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NewsService } from './news.service';
import { PipesPipe } from './shared/pipes.pipe';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { FilterPipe } from '../../pipe/filter.pipe';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,NbSelectModule,
  ],
  declarations: [
    LayoutComponent,
    TabsComponent,
    Tab1Component,
    Tab2Component,
    StepperComponent,
    ListComponent,
    NewsPostPlaceholderComponent,
    InfiniteListComponent,
    NewsPostComponent,
    AccordionComponent,
    PipesPipe,
    FilterPipe,
    EditComponent,
    ViewComponent,
 
  ],
  providers: [
    NewsService,
  ],
})
export class LayoutModule { }
