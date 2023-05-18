import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss'],
})
export class AddpostComponent implements OnInit {
  public post = {
    title: '',
    image: '',
    text: '',
  };
  constructor(private dataService: DataService, public router: Router) {}
  ngOnInit() {}
  create() {
    this.dataService.add(this.post).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/blog']);
  }
}
