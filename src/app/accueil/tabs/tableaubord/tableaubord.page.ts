import { Component, OnInit, ɵɵdefineNgModule } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tableaubord',
  templateUrl: './tableaubord.page.html',
  styleUrls: ['./tableaubord.page.scss'],
})
export class TableaubordPage implements OnInit {
  today; selecDate; age;
  constructor(public crudService: CrudService) {
    this.today = new Date().toISOString();
  }

  ngOnInit() {
  }

}
