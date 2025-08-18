import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-domaine-box',
  imports: [],
  standalone: true,
  templateUrl: './domaine-box.component.html',
  styleUrl: './domaine-box.component.css'
})
export class DomaineBoxComponent implements OnInit {
  @Input() data: any;
  ngOnInit(): void {
      console.log("Data",this.data)
  }

}
