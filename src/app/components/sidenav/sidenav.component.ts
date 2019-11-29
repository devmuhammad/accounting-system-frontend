import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  step:string = ''
  opened: boolean = false
  merchantName:string = 'NIRSAL-10112'
  menuList = [
  //   {
  //   route: '', icon: 'dashboard', name: 'Executive Dashboard'
  // },
  //   {
  //   route: 'usermanager', icon: 'account_circle', name: 'User Manager',
  // },
    {
    route: 'null', icon: 'account_balance', name: 'Accounts',
    children: [
      { route: 'accounts', icon: '', name: 'Chart Of Account' },
      { route: 'accounts', icon: '', name: 'Sub Accounts' },
    ]
  },
    {
    route: 'transactions', icon: 'assignment', name: 'Transactions',
    children: [
      { route: 'settings', icon: 'fa fa-user-cog', name: 'Bank Reconciliation' },
      { route: 'settings/bank-accounts', icon: 'fa fa-university', name: 'Bank Account' },
    ]
  },
    {
    route: 'invoice', icon: 'receipt', name: 'Invoice',
    children: [
      { route: 'settings', icon: 'fa fa-user-cog', name: 'Profile' },
      { route: 'settings/bank-accounts', icon: 'fa fa-university', name: 'Bank Account' },
    ]
  },
    {
    route: 'projects', icon: 'book', name: 'Projects',
    children: [
      { route: 'settings', icon: 'fa fa-user-cog', name: 'Profile' },
      { route: 'settings/bank-accounts', icon: 'fa fa-university', name: 'Bank Account' },
    ]
  },
    {
    route: 'fixedassets', icon: 'business', name: 'Fixed Assets',
    children: [
      { route: 'settings', icon: 'fa fa-user-cog', name: 'Profile' },
      { route: 'settings/bank-accounts', icon: 'fa fa-university', name: 'Bank Account' },
    ]
  },
    {
    route: 'inventory', icon: 'inventory', name: 'Inventory',
    children: [
      { route: 'settings', icon: 'fa fa-user-cog', name: 'Profile' },
      { route: 'settings/bank-accounts', icon: 'fa fa-university', name: 'Bank Account' },
    ]
  },
    {
    route: 'reports', icon: 'table_chart', name: 'Reports',
    children: [
      { route: 'settings', icon: 'fa fa-user-cog', name: 'Profile' },
      { route: 'settings/bank-accounts', icon: 'fa fa-university', name: 'Bank Account' },
    ]
  },
    {
    route: 'epayments', icon: 'credit_card', name: 'E-payments',
    children: [
      { route: 'settings', icon: 'fa fa-user-cog', name: 'Profile' },
      { route: 'settings/bank-accounts', icon: 'fa fa-university', name: 'Bank Account' },
    ]
  },
   
]

  constructor() { }

  ngOnInit() {
  }
  
  /**
   *  @title 'set-step'
   * Utility function to control
   *  side bar toggle
   * and actuate navigation when
   *  items is clicked
   * @param object and index
   * @returns navigation function
   */
  setStep(item, index) {
    if (item.children) {
      if (this.step === index) {
        return this.step = '';
      }
      return this.step = index;
    }
  }

}
