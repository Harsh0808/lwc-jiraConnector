
import { LightningElement, api, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import getPickListValuesIntoList from '@salesforce/apex/JIRASettingController.getPickListValuesIntoList';

export default class TestingJiraConnector extends LightningElement {
    clickedButtonLabel;
    jiraApi
    handleClick(event) {
        this.value = event.detail.valueComboBox;
    }

    valueComboBox = 'Name';

    get options() {
        return [
            { label: 'Product Code (ProductCode)', value: 'ProductCode' },
            { label: 'Opportunity Product Name (Name)', value: 'Name' },
            { label: 'Description Rich', value: 'Description_Rich__c ' },
            { label: 'Product Name', value: 'Product_Name__c' },
        ];
    }

    handleChangeComboBox(event) {
        this.value = event.detail.valueComboBox;
    }

    valueComboBox2 = 'Description';

    get options2() {
        return [
            { label: 'Product Code (ProductCode)', value: 'ProductCode' },
            { label: 'Opportunity Product Name (Name)', value: 'Name' },
            { label: 'Line Description (Description)', value: 'Description' },
            { label: 'Description Rich', value: 'Description_Rich__c ' },
            { label: 'Product Name', value: 'Product_Name__c' },
        ];
    }

    handleChangeComboBox2(event) {
        this.value = event.detail.valueComboBox2;
    }

    valueComboBox3 = 'Quantity';

    get options3() {
        return [
            { label: 'Sort Order (SortOrder)', value: 'SortOrder' },
            { label: 'Quantity (Quantity)', value: 'Quantity' }            
        ];
    }

    handleChangeComboBox3(event) {
        this.value = event.detail.valueComboBox3;
    }

        valueComboBox4 = 'ServiceDate';

    get options4() {
        return [
            { label: 'Date (ServiceDate)', value: 'ServiceDate' },
            { label: 'Created Date (CreatedDate)', value: 'CreatedDate' },
            { label: 'Last Modified Date (LastModifiedDate) ', value: 'LastModifiedDate' },
            { label: 'System Modstamp (SystemModstamp)', value: 'SystemModstamp' }            
        ];
    }

    handleChangeComboBox4(event) {
        this.value = event.detail.valueComboBox4;
    }

    valueComboBox5 = '60';

    get options5() {
        return [
            { label: '1 Hr', value: '60' },
            { label: '6 Hr', value: '360' },
            { label: '12 Hr', value: '720' },
            { label: '24 Hr', value: '1440' }            
        ];
    }

    handleChangeComboBox5(event) {
        this.value = event.detail.valueComboBox5;
    }


    valueComboBox6 = '2';

    get options6() {
        return [
            { label: '2 Week', value: '2' },
            { label: '1 Month', value: '1' },
            { label: '3 Month', value: '3' },            
            { label: '6 Month', value: '6' }            
        ];
    }

    handleChangeComboBox5(event) {
        this.value = event.detail.valueComboBox5;
    }

@api inputvalue2;
@api inputvalue3;
@api inputvalue;

handleClick(event) {
    console.log('inputtvalues'+this.inputvalue + ' + ' + this.inputvalue2 + this.inputvalue3);
    
 }

 handleChange(event) {
    this.inputvalue = event.target.value;
  }
 handleChange2(event) {
    this.inputvalue2 = event.target.value;
  }

        @wire(getPickListValuesIntoList) pickListValues;
        

}
