import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { AppInfoService, Customer } from 'src/app/shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './tasks.component.html',
  providers: [AppInfoService],
})
export class TasksComponent {
  @ViewChild('form', { static: false }) form: DxFormComponent;
  key: string = 'ID';
  formData: any = {};
  popupMode: string = 'Add';
  popupVisible: boolean = false;
  customers: Customer[];
  customerStore: ArrayStore;
  gridSource: DataSource;

  constructor(service: AppInfoService) {
    this.customers = service.getCustomers();
    this.customerStore = new ArrayStore({
      data: this.customers,
      key: this.key,
      onPush: () => {
        this.gridSource.reload();
      },
    });
    this.gridSource = new DataSource({
      store: this.customerStore,
    });

    this.addClick = this.addClick.bind(this);
    this.editClick = this.editClick.bind(this);
    this.confirmClick = this.confirmClick.bind(this);
    this.cancelClick = this.cancelClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
  }

  onToolbarPreparing(e) {
    let toolbarItems = e.toolbarOptions.items;

    // customize addRow toolbar button
    for (let i = 0; i < toolbarItems.length; i++) {
      let item = toolbarItems[i];
      if (item.name === 'addRowButton') {
        item.options.onClick = this.addClick;
        break;
      }
    }
  }

  showPopup(popupMode, data) {
    this.formData = data;
    this.popupMode = popupMode;
    this.popupVisible = true;
  }

  confirmClick(e) {
    let result = this.form.instance.validate();
    if (result.isValid) {
      let gridSource = this.gridSource,
        gridStore = this.customerStore;

      if (this.popupMode === 'Add') {
        console.log('adding new cutomer');
        console.log(this.formData);
        gridStore.push([{ type: 'insert', data: this.formData }]);
      } else if (this.popupMode === 'Edit') {
        console.log('edding a cutomer');
        console.log(this.formData);
        gridStore.push([
          { type: 'update', data: this.formData, key: this.formData[this.key] },
        ]);
      }

      this.popupVisible = false;
    }
  }

  addClick(e) {
    this.showPopup('Add', {});
  }

  editClick(e) {
    console.log('editando a cutomer');
    console.log(this.formData);
    this.showPopup('Edit', { ...e.row.data });
  }

  deleteClick(e) {
    console.log('deletando a cutomer');
    let result = confirm('<i>Are you sure?</i>', 'Confirm changes');
    result.then((dialogResult) => {
      if (dialogResult) {
        console.log(e.row.data);
      }
    });
  }

  cancelClick(e) {
    this.popupVisible = false;
    this.form.instance.resetValues();
  }
}
