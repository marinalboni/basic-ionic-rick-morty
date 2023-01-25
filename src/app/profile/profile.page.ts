import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../interfaces/characters.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  id: string = '';
  profile!: Result;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.activatedRoute.params
    .subscribe((params) => {
      const { id } = params;
      this.id = id;
    });

    this.http.get<Result>(`https://rickandmortyapi.com/api/character/${this.id}`)
    .subscribe(res => this.profile = res)
    
  }

}
