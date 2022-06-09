import { Component, OnInit,Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-filteroutlet',
  templateUrl: './filteroutlet.page.html',
  styleUrls: ['./filteroutlet.page.scss'],
})
export class FilteroutletPage implements OnInit {

  @Input() storeList = [];

  constructor(private modal:ModalController,private toastController:ToastController) { }

  ngOnInit() {
  }

  remove(i){
    if(this.gettrueStore() > 1){
      this.storeList[i].status = false;
    }else{
      this.presentToast('Please select atleast one store')
    }
  }

  gettrueStore(){
    return this.storeList.filter(item => item.status == true).length;
  }
  add(i){
    if(this.gettrueStore() >= 20){
      this.presentToast('Max 20 Outlet!')
    }else{
      this.storeList[i].status = true;
    }

  }

  done(){
    this.modal.dismiss({
      'storeList': this.storeList
    })
  }
  clearall(){
    for(let i of this.storeList){
      i.status = false;
    }
    this.storeList[0].status = true;
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
