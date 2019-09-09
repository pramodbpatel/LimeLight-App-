import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Album } from '../../../model/album';
import { Photo } from '../../../model/photo';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  photos: Photo[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('ACCESS_TOKEN') === null)
      this.router.navigateByUrl('/login');
    this.authService.getAlbums().subscribe(albums => {
      this.albums = albums.filter(a => a.userId === parseInt(localStorage.getItem('ID')));
    });
    this.authService.getPhotos().subscribe(photos => {
      this.albums.forEach( (album, i) => {        
        if(i==0){
          this.photos = photos.filter(p =>
            p.albumId === album.id
          );
        }
      });
    });
  }
  updateAlbumPhotos(id){
    this.authService.getPhotos().subscribe(photos=>{
      this.photos = photos.filter(p=>p.albumId===id);
    });
  }
}
