import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-electronic-item',
  templateUrl: './add-electronic-item.component.html',
  styleUrls: ['./add-electronic-item.component.css']
})
export class AddElectronicItemComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.createElectronicItemForm();
  }

  electronicItemForm:FormGroup;
  
  createElectronicItemForm()
  {
    this.electronicItemForm=this.fb.group({
      company:['',Validators.required],
      productName:['',Validators.required],
      serialId:['',Validators.required],
      price:['',Validators.required]

    })
  }

onSubmit()
{
console.log(this.electronicItemForm.value);
this.saveElectronicItem();

}

reset()
{
  this.electronicItemForm.reset();
  
}

saveElectronicItem()
{
  this.userService.saveElectronicItem(this.electronicItemForm.value).subscribe(data=>{
    this.userService.user=data;
    console.log(data);
    Swal.fire('Success...', 'Electronic Item is Saved Successfully', 'success');
    this.createElectronicItemForm();

  },(error)=>{
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  })
}

}
