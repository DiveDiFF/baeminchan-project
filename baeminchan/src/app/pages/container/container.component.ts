import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../module/product-api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private api: ProductApiService) { }

  ngOnInit() {
    this.api.userToken = localStorage.getItem('Token');
  }

}
