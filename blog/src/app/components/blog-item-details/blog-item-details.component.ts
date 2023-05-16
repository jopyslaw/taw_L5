import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DataModel from 'src/app/models/dataModel.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.scss'],
})
export class BlogItemDetailsComponent implements OnInit {
  public image: string =
    'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg';
  public text: string = 'Tytuł';
  constructor(private service: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) => {
      id = params.get('id');
    });

    this.service.getById(id).subscribe((res: DataModel) => {
      console.log('data', res);
      this.image = res['image'];
      this.text = res['text'];
    });
  }
}
