import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IddServicesService } from 'src/app/service/idd-services.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-satisfaccion-feed-back',
  templateUrl: './satisfaccion-feed-back.component.html',
  styleUrls: ['./satisfaccion-feed-back.component.css']
})
export class SatisfaccionFeedBackComponent{

   myForm: FormGroup;

   formData = new FormData();

  constructor(private fb: FormBuilder, private dataService:IddServicesService,
    private matDialogRef: MatDialogRef<SatisfaccionFeedBackComponent>,) {
    this.myForm = this.fb.group({
      agrado: ['', Validators.required],
      opnion: [''],
    });
  }

  submitForm() {
    if (this.myForm.valid) {      
      this.formData.append('agrado', this.myForm.get('agrado')?.value);
      this.formData.append('opnion', this.myForm.get('opnion')?.value);

      this.dataService.addSatisfaccion(this.formData).subscribe(res=>{
        console.log(res)
      })

      console.log(this.formData.get('agrado'), this.formData.get('opnion'))
    }
    this.matDialogRef.close()
    
  }

}

