import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ActivatedRoute, NavigationEnd, Router , Event, NavigationStart, NavigationError} from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent  {

  public pageTitle?: any;
  currentRoute?: string;


  title = 'plantilla_sae';
  names = localStorage.getItem('names');
  surnames = localStorage.getItem('surnames');
  //role = localStorage.getItem('role');

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  
  constructor(changeDetectorRef: ChangeDetectorRef, 
                 media: MediaMatcher,
                  public authService: AuthService,
                   private readonly router: Router,
                    private route: ActivatedRoute) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

   }

  

  @Input() role : any = localStorage.getItem('role');

  ngOnInit(): void {
   

  }



  

   opener(event:any){

    let elements = document.querySelectorAll('.active');
    
    if( event.srcElement.classList.length==1){
      event.srcElement.classList.add('active');
      if(elements.length>0){
        elements.forEach(function(item) {
          item.classList.remove('active')
        });  
           
      };
     
    }else{
      let openers = document.querySelectorAll('.active');
      openers.forEach(function(item) {
        item.classList.remove('active')
         
      });
    }
     
  }

  onChangeRole(event : any){
    
    localStorage.setItem('role',event.target.value )
    this.authService.getRole();
    this.router.navigate(['/admin/allmembers'])

   // alert(localStorage.getItem('role'))
  }
 
}
