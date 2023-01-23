import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'ngx-manageroleandper',
  templateUrl: './manageroleandper.component.html',
  styleUrls: ['./manageroleandper.component.scss']
})
export class ManageroleandperComponent implements OnInit {
  role: any;
  userlist: any
 toggledata:any
  constructor(private ser :UserAuthService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let rid = this.route.snapshot.paramMap.get('id') 
   let id={rid}
    this.ser.GetRoleByid(id).subscribe((res: any) => {
      this.role =res.name;
      console.log(res)
       console.log(this.role)
    })
    console.log(this.role)
   console.log(id) 
    console.log("ngoninit is call")
    this.ser.GetModuleList().subscribe((res:any)=>{
      console.log(res)
      this.userlist=res
      console.log(this.userlist)
    })

  }
  toggleStatus(userid: any, value: any) {
     this.toggledata = { userid, value }
    console.log(this.toggledata)
    this.ser.toggleModuleStatus(this.toggledata).subscribe((res: any) => {
      if (res.err == 0
      ) {
        Swal.fire(`${res.msg}`, `${value}`, 'success')
       this.ser.GetModuleList().subscribe((res:any)=>{
      console.log(res)
      this.userlist=res
      console.log(this.userlist)
    })

      }
   })
  }
}
