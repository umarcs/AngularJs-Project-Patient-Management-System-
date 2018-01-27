import { Component, OnInit } from '@angular/core';
import { MiscService } from '../services/misc/misc.service';
import { GithubService } from '../services/github/github.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css'],
  providers: [MiscService, GithubService]
})

export class MiscComponent implements OnInit {

  public data: any;

  constructor(private miscService: MiscService, private gitHubService: GithubService) { }

  ngOnInit() {

     this.gitHubService.getUser().subscribe(
      res => {
        console.log(res)
        this.data = res.data;
      }
    )

  }

    click(){
      this.miscService.getMiscData().subscribe(
      res => {
        console.log(res)
        this.data = res.data;
      }
    )
    }
  


}
