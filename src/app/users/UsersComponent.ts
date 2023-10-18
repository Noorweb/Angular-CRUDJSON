import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm: any;
  usersList: any;
  constructor(
    public formBuilder: FormBuilder,
    private service: CommonService
  ) {


  }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      Name: new FormControl(''),
      Mobile: new FormControl(''),
      Email: new FormControl(''),
      Age: new FormControl(''),
    });
    this.GetAllUsers();
  }

  SubmitForm() {
    this.service.AddUpdateUser(this.userForm.value).subscribe(data => {
      alert("Added");
      this.userForm.reset();
      this.GetAllUsers();
      console.log(data);
    })
  }

  GetAllUsers() {
    this.service.GetAllUsers().subscribe((data: any) => {
      if (data)
        this.usersList = data;
    })
  }


  DeleteUserByID(ID: any) {
    this.service.DeleteUserByID(ID).subscribe(data => {
      if (data)
        this.GetAllUsers();
    })

  }
}
