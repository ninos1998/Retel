import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-materials',
  templateUrl: './our-materials.component.html',
  styleUrl: './our-materials.component.css'
})
export class OurMaterialsComponent implements OnInit {
  displayMaterials: any
    @Input() data: any;

  ngOnInit() {
    this.displayMaterials = [...this.data, ...this.data, ...this.data];
  }

trackByFn(index: number, item: any): string {
    return `${item.title}_${index}`;
  }
}

