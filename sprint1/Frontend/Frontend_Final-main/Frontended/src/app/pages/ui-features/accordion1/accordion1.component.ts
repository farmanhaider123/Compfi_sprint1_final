import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import Swal from 'sweetalert2';
import { SmartTableData } from '../../../@core/data/smart-table';
import { UserAuthService } from '../../ui-features/service/user-auth.service';

@Component({
  selector: 'ngx-accordion1',
  templateUrl: './accordion1.component.html',
  styleUrls: ['./accordion1.component.scss']
})
export class Accordion1Component implements OnInit{
  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;
  UsersRoleList:any;


 toggledata:any

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private windowService: NbWindowService,private userServ:UserAuthService) {
    const data = this.service.getData();
    this.source.load(data);
  }
  myForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
    
  })
 
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Create User',
        // context: {
        //   text: 'some text to pass into template',
        // },
      },
    );
  }

  // openWindowForm() {
  //   this.windowService.open(WindowFormComponent, { title: `Window` });
  // }

  // openWindowWithoutBackdrop() {
  //   this.windowService.open(
  //     this.disabledEscTemplate,
  //     {
  //       title: 'Window without backdrop',
  //       hasBackdrop: false,
  //       closeOnEsc: false,
  //     },
  //   );
  // }

  get fdata(){
    return this.myForm.controls;
  }
  ngOnInit(){
   this.userServ.Getalluserrole().subscribe((res:any)=>{
     this.UsersRoleList=res;
   })
  }
    postData()
    {
      let formdata = this.myForm.getRawValue();
      console.log(formdata)
      this.userServ.postRole(formdata).subscribe((res:any)=>{
        if(res.err==1){
          Swal.fire(`${res.msg}`,'','warning')
        }
        if(res.err==0){
          Swal.fire(`${res.msg}`,'','success')
          this.userServ.Getalluserrole().subscribe((res:any)=>{
            this.UsersRoleList=res;
          })
        }

      })
     
      
    }
  
    toggleStatus(userid:any,value: any) {
      this.toggledata = { userid, value }
      console.log(this.toggledata)
      this.userServ. toggleroleStatus(this.toggledata).subscribe((res: any) => {
        if (res.err == 0
        ) {
          Swal.fire(`${res.msg}`, `${value}`, 'success')
          this.userServ.Getalluserrole().subscribe((res:any)=>{
            this.UsersRoleList=res;
          })

        }
     })
    }
  deleteUserRole(id: any) {
    let roleid = { id }
    console.log(roleid)
    this.userServ.DeleteRole(roleid).subscribe((res: any) => {
       if(res.err==1){
          Swal.fire(`${res.msg}`,'','warning')
        }
        if(res.err==0){
          Swal.fire(`${res.msg}`,'','success')
          this.userServ.Getalluserrole().subscribe((res:any)=>{
            this.UsersRoleList=res;
          })
        }
    })
  }
}
