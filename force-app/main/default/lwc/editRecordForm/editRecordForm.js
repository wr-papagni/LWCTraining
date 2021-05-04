/**
 * Created by papagni on 04/05/2021.
 */

import { LightningElement, api } from "lwc";
import BIRTHDAY from '@salesforce/schema/Account.Birthday__c';

export default class editRecordForm extends LightningElement {
  @api recordId;
  @api objectApiName;

  handleError(event){
    console.log('handleError: ', event.detail);
  }

  handleSubmit(event){
    //event.preventDefault();
    console.log('handleSubmit');
  }
}