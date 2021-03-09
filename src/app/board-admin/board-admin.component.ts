import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content : any = [];
  items  : any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getallChecklist().subscribe(
      data => {
        let str: string = data;
        this.content = JSON.parse(str);
        this.items = this.content.data;

        // console.log(this.content);
        // console.log(this.items)

        // for (let i = 0; i < 20; i++) {
        //   console.log(i)
        //   console.log(this.items[i])
        // }
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  deleteItem(id){
    this.userService.deleteListByid(id).subscribe(
      (data: any) => {

      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
      );

  }
}
