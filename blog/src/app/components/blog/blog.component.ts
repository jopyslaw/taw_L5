import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import DataModel from 'src/app/models/dataModel.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() filterText: string = '';
  public items$!: DataModel[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.dataService.getAll().subscribe((data) => {
      this.items$ = data;
      console.log(data);
    });
  }
}
