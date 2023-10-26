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
  ){}
  filterButtons = [
    { text: 'Posted', isClicked: false },
    { email: 'FFM', isClicked: false },
    { number: '9999', isClicked: false },
  ]


  setActive(button: any): void {
    for(let but of this.filterButtons) {
      but.isClicked = false;
    }

    button.isClicked = true;
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
    console.log("clicked");
    console.log(this.userForm.value);
    this.service.AddUpdateUser(this.userForm.value).subscribe((data:any)  => {
      alert("Added");
      this.userForm.reset();
      this.GetAllUsers();
      console.log(data);
    })
  }

  GetAllUsers() {
    this.service.GetAllUsers().subscribe((data: any) => {
      console.log(data);
      if (data)
        this.usersList = data;
    })
  }


  DeleteUserByID(ID: any) {
    this.service.DeleteUserByID(ID).subscribe((data:any) => {
      if (data)
        this.GetAllUsers();
    })

  }
}
