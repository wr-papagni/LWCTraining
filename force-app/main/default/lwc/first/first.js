/**
 * Created by papagni on 29/04/2021.
 */

import { api, LightningElement, track } from "lwc";
//import getData from "@salesforce/apex/First.getdata";

export default class First extends LightningElement {
 @track eventLogs = '';
 @track button = {label: 'Call server', disabled: false};
 @api recordId;

 //## Lifecycle hooks: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lifecycle_hooks
 constructor(){
  super();
  console.log('>>> constructor. RecordId:', this.recordId);
 }

 connectedCallback(){
  console.log('>>> connectedCallback: ', this.isConnected);
  this.eventLogs += this.isConnected;
 }

 handleOnClickBtn(event){
  console.log('>>> handleOnClickBtn.');
 }
}