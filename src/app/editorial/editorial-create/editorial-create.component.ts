import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ToastrService } from "ngx-toastr";

import { Editorial } from "../editorial";
import { EditorialService } from "../editorial.service";

@Component({
  selector: "app-editorial-create",
  templateUrl: "./editorial-create.component.html",
  styleUrls: ["./editorial-create.component.css"]
})
export class EditorialCreateComponent implements OnInit {
  editorialForm: FormGroup;

  editoriales: Editorial[];

  constructor(
    private editorialService: EditorialService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.editorialForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", Validators.required]
    });
  }

  createEditorial(newEditorial: Editorial) {
    // Process checkout data here
    console.warn("el editoriale fue creado", newEditorial);

    this.editorialService.createEditorial(newEditorial).subscribe(editorial => {
      this.editoriales.push(editorial);
      this.showSuccess();
    });
    this.editorialForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.editoriales.length; i++){
      console.log(this.editoriales[i].id+' '+this.editoriales[i].name);
    }
    this.toastr.success("Editorial", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.editorialService
      .getEditorials()
      .subscribe(editoriales => (this.editoriales = editoriales));
  }
}
