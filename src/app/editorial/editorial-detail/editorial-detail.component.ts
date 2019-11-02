import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EditorialService } from '../editorial.service';
import { Editorial } from '../editorial';
import { EditorialDetail } from '../editorial-detail';

@Component({
  selector: 'app-editorial-detail',
  templateUrl: './editorial-detail.component.html',
  styleUrls: ['./editorial-detail.component.css']
})
export class EditorialDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private editorialService: EditorialService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  editorialDetail: EditorialDetail;



  /**
  * The editorial's id retrieved from the address
  */
  @Input() editorial_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getEditorialDetail(): void {

    this.editorialService.getEditorialDetail(this.editorial_id)
      .subscribe(o => {
        this.editorialDetail = o
      });
  }

  onLoad(params) {

    this.editorial_id = parseInt(params['id']);
    console.log(" en detail " + this.editorial_id);
    this.editorialDetail = new EditorialDetail();
    this.getEditorialDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
