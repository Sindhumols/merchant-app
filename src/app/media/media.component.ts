import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ElementRef, ViewContainerRef, AfterViewInit, ViewChild, ViewRef, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageData, DisplayConfig, SameSizeConfig, ImageEffect } from '@creativeacer/ngx-image-display';
enum hoverEffect {
  zoom = 'zoom',
  lighten = 'lighten',
}
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],

})
export class MediaComponent implements OnInit {
  [x: string]: any;
  constructor(private fb: FormBuilder) {
    this.setImages();
    this.samesizeoption = true;
    this.displayconfig = {
      containerwidth: '100%',
      containerheight: '50%',

      fullScreenView: true
      // Set to true to see the top right full screen option
    };
    this.hovereffect = {
      hoverEffectActive: true
    };
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
  imagesub: Subscription;
  images: Array<ImageData> = [];
  samesizeConfig: SameSizeConfig;
  displayconfig: DisplayConfig;
  hovereffect: ImageEffect;
  samesizeoption: boolean;
  fullscreenoption: boolean;
  hoverEffect: string = '';
  video = '../../assets/video/VideoOfHotelLounge.mp4';
  image = '../../assets/img/photo.jpg';
  show = false;
  showcontent = true;
  showvideo: Boolean;
  showMore1: Boolean;
  showimage: Boolean;
  showMore2: Boolean;
  uploadForm: FormGroup;
  imageSrc: string;
  setImages() {
    this.images = [
      {
        type: 'url',
        imageData: {
          value: "http://localhost:4200/assets/img/photo.jpg",
        }
      },
    ];
  }
  logImage(image) {
    alert('click  on the image in the top of the  right corner');

  }
  sameSizeimages(showSame) {
    this.samesizeoption = showSame;
  }
  hoverEffectFn(effect) {
    let chosenEffect;
    let effectActive;
    switch (effect) {
      case '':
        chosenEffect = hoverEffect.zoom;
        effectActive = false;
        this.hoverEffect = '';
        break;
      case 'zoom':
        chosenEffect = hoverEffect.zoom;
        effectActive = true;
        this.hoverEffect = 'zoom';
        break;

    }
    this.hovereffect = {
      hoverEffectActive: effectActive,
      hoverEffect: chosenEffect,

    };
    this.samesizeoption = !this.samesizeoption;
  }
}
