import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  @ViewChild('modal_1') modal_1!: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc!: ViewContainerRef;

  constructor() { }
  @Input() photo: any;

  ngOnInit(): void {
  }


  backdrop: any
  showModal(photo: any){
    let view = this.modal_1.createEmbeddedView(null);
    this.vc.insert(view);
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
    this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
    this.backdrop = document.createElement('DIV')
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop);
    console.log(photo)
  }

  closeModal() {
    this.vc.clear()
    document.body.removeChild(this.backdrop)
  }
}
