import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
interface response {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-merchant-dashboard',
  templateUrl: './merchant-dashboard.component.html',
  styleUrls: ['./merchant-dashboard.component.scss']
})
export class MerchantDashboardComponent implements OnInit {
  [x: string]: any;
  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }
  outof = 90 / 120;
  outof1 = 30 / 50;
  video = '../../assets/video/VideoOfHotelLounge.mp4';
  image = '../../assets/img/photo.jpg';
  show = false;
  upload = true;
  showcontent = true;
  showvideo: Boolean;
  showMore1: Boolean;
  showimage: Boolean;
  showMore2: Boolean;
  type = 'bar';
  data = {
    labels: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    datasets: [
      {
        label: "Coupons Redeemption",
        data: [400, 800, 1470, 2000, 1010, 500, 234],
        type: 'line',
        borderColor: '#07706E',
        backgroundColor: '#CDEBFF',
        fill: true
      }
    ]
  };
  options = {
    responsive: true,
  };
  uploadForm: FormGroup;
  imageSrc: string;
  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      storeCategory: ['', Validators.required],
      file: ['', [Validators.required]],
      fileSource: ['', [Validators.required]],
    });
  }
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.uploadForm.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }
  show1() {
    this.show = true;
    this.showcontent = false;

  }
  show2() {
    window.alert("Your Image/Video Has Been successfully Uploaded");
    this.upload = false;
  }
  submitForm(uploadForm) {
    console.log(this.uploadForm.value);
  }
  ngOnInit() {
    this.uploadForm = new FormGroup({
      Title: new FormControl("", Validators.required),
      Description: new FormControl("", Validators.required),
      file: new FormControl("", Validators.required),
      fileSource: new FormControl("", Validators.required),
    });
  }

}
