import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private imagePicker: ImagePicker,
    private actionSheetCtrl: ActionSheetController
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

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      // title: '添加照片方式',
      buttons: [
        {
          text: '从相册选取',
          handler: () => {
            this.pick();
          }
        }, {
          text: ' 拍照',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
