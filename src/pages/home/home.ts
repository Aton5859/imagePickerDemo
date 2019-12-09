import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private imagePicker: ImagePicker
  ) {

  }

  pick() {
    try {
      let options: ImagePickerOptions = {
        maximumImagesCount: 10,
        width: 100,
        height: 100,
        quality: 10,
        outputType: 1
      };
      this.imagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
          alert('Image URI: ' + results[i]);
        }
      }, (err) => { });
    } catch (error) {
      alert(error);
    }
  }

}
