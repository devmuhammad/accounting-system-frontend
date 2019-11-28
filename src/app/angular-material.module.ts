import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {} from '@angular/material/bottom-sheet';
import {
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatBadgeModule,
   MatSidenavModule,
   MatListModule,
   MatMenuModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatChipsModule,
   MatTabsModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule,
   MatExpansionModule,
   ErrorStateMatcher,
   MatBottomSheetModule,
   ShowOnDirtyErrorStateMatcher
} from '@angular/material';
// import {MatExpansionModule} from '@angular/material/expansion'

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTabsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatExpansionModule,
      MatBottomSheetModule,
      MatMenuModule
      // MatAccordion
   ],
   exports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatChipsModule,
      MatTabsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatExpansionModule,
      MatBottomSheetModule,
      MatMenuModule
      // MatAccordion
   ],
   providers: [
      MatDatepickerModule,
      {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
   ]
})

export class AngularMaterialModule { }