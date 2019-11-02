import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Editorial } from "../editorial";
import { EditorialService } from "../editorial.service";

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
  selector: "list-editorial",
  templateUrl: "./editorial-list.component.html"
})
export class EditorialListComponent implements OnInit {
  /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(
    private editorialService: EditorialService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * The list of editorials which belong to the BookStore
   */
  editorials: Editorial[];

  /**
   * Asks the service to update the list of editorials
   */
  getEditorials(): void {
    this.editorialService
      .getEditorials()
      .subscribe(editorials => (this.editorials = editorials));
  }



  onSelectCreate(): void {
    console.log("navigating ", this.route.toString());
    this.router.navigate([{ outlets: { right: ['add'] } }], {
      relativeTo: this.route.parent
    });
  }

    /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getEditorials();
  }
}
