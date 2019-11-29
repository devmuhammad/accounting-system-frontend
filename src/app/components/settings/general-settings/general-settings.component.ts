import { Component, OnInit,ViewChild,AfterViewInit,Output, EventEmitter,Inject,Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

// interface AfterViewInit {
//   ngAfterViewInit(): void
// }

export interface locationData {
  code: number;
  description: string;
  type: string;
}

export interface params {
  description: string
}

const ELEMENT_DATA: locationData[] = [
  {code: 10, description: 'Abuja', type: 'Headquarters'},
  {code: 20, description: 'Lokoja', type: 'Finance' },
  {code: 30, description: 'Lagos', type: 'Operations' },
  {code: 40, description: 'PortHarcout', type: 'Zonal HQ'} 
 
];

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {

  displayedColumns: string[] = ['code', 'description', 'type','action'];
  dataSource = new MatTableDataSource<locationData>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  // @ViewChild(MatTableDataSource,{static:true}) table: MatTableDataSource<any>;
  // @ViewChild('addNewSubOrg', { static: true }) updtSource: addNewSubOrg;

  fileName:string="";
  mngType:string ="Bank"

  busInfo: FormGroup;
  BusinessName:string ="";
  ContactNo:string ="";
  ContactEmail:string ="";
  Website:string=""
  Address:string=""

  bankInfo: FormGroup;
  AccountName: string="";
  AccountNo: number=0;
  Bvn: number=0;
  TinNo: number=0;
  BankName: string="";
  BankAddress: string="";
  SortCode: string=""
  
  
  constructor(private fb: FormBuilder,private _bottomSheet: MatBottomSheet) { 
    
    // To initialize FormGroup  
    this.busInfo = fb.group({  
      'BusinessName' : [null, Validators.required],  
      'ContactNo' : [null, Validators.required],  
      'Address' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],   
      'Website':[null, Validators.required],  
      'ContactEmail':[null, Validators.compose([Validators.required,Validators.email])],  
    })

    this.bankInfo = fb.group({  
      'AccountName' : [null, Validators.required],  
      'AccountNo' : [null, Validators.required],  
      'BankAddress' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],   
      'BankName':[null, Validators.required],  
      'SortCode':[null, Validators.required],  
      'Bvn':[null, Validators.required],  
      'TinNo':[null, Validators.required],  
    })
   }

   
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    }

   ngOnInit() {
     
    //  this.dataSource.paginator = this.paginator;
   }

   setBank(){
     this.mngType = "Bank"
   }

   setDept(){
      this.mngType = "Department"
   }

   setDes(){
    this.mngType = "Designation"
   }

   setPen(){
    this.mngType = "Pension Provider"
   }

   fileProgress(fileInput: any) {
    let file = fileInput.target.files[0];
     this.fileName = file.name;
    // console.log(this.fileName)
}

   addNewSubOrg(action,rowdata): void {
     rowdata.action = action
    const bottomSheetRef = this._bottomSheet.open(addNewSubOrg,{data:rowdata});

    bottomSheetRef.afterDismissed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    })
  }

  addRowData(row_obj){
  
    this.dataSource.data = [...this.dataSource.data,({
      code:row_obj.code,
      description:row_obj.description,
      type:row_obj.type
    })]
    // this.table.renderRows();

  }
  updateRowData(row_obj){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      if(value.code == row_obj.code){
        value.description = row_obj.description,
        value.type = row_obj.type
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      return value.code != row_obj.code;
    });
  }


   onBusInfoSubmit(form:NgForm)  
   {  
     console.log(form);  
   }  
   onBankInfoSubmit(form:NgForm)  
   {  
     console.log(form);  
   }  

 }
 

 @Component({
  selector: 'add-new-sub-org',
  templateUrl: 'add-new-sub-org.html',
  styleUrls: ['./general-settings.component.css']
})
export class addNewSubOrg {
  NewSubOrg: FormGroup;
  code:number=1011+1;
  type:string ="";
  ParentOrg:string ="";
  description:string="";
  ContactEmail:string ="";
  ContactNo:number=0;
  Address:string=""


  action:string;
  local_data:any;

  constructor(private fb: FormBuilder, 
        private _bottomSheetRef: MatBottomSheetRef<addNewSubOrg>, 
        @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public data: locationData)  {
          this.local_data = {...data};
          this.action = this.local_data.action;
          // console.log(this.local_data)

          this.code = this.local_data.code
          this.description = this.local_data.description
          this.type = this.local_data.type
          
    this.NewSubOrg = fb.group({  
      'SubOrgType' : [null, Validators.required],  
      'ParentOrg' : [null, Validators.required],  
      'Description' : [null, Validators.required],   
      'ContactNo' : [null, Validators.required],  
      'Address' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],   
      // 'Website':[null, Validators.required],  
      'ContactEmail':[null, Validators.compose([Validators.required,Validators.email])],  
    })
  }

  // @Output() updtTable = new EventEmitter<any>()

  onNewSubOrgSubmit(form:NgForm)  
  {  
    // this.updtTable.emit(form);
    this.local_data.concat(form)
    this._bottomSheetRef.dismiss({event:this.action,data:this.local_data});
    // this.dataSource.data = [...this.dataSource.data, form];
  }  

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  
}
