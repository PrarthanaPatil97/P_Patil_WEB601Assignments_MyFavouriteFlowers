import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ContentList } from './helper-files/content-list';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P_Patil_WEB601Assignments_MyFavouriteFlowers';
  lotsOfFlower:ContentList;
 
  constructor(){

    let rose: Content;

    rose={
        id: 1,
        title: 'Rosa',
        description: 'The name Rose is derived from Latin word Rosa.',
        creator: 'Seed',
        imgUrl: 'https://www.google.com/search?q=rose&rlz=1C1ONGR_enCA981US981&sxsrf=APq-WBvMl2T6rWuQ_zeOy1kM5Q0RrPBTmA:1643518002495&tbm=isch&source=iu&ictx=1&vet=1&fir=DmXGYSA7ya8gkM%252C8mUHi_6H2kTQLM%252C%252Fm%252F06m11%253B-uiLDsNiEiyhqM%252CdvgVZ-aEcdr1wM%252C_%253BnukHflU3q69mDM%252C3VHs86nNs58q8M%252C_%253BsYQRQrQE8fDkMM%252CPFQUVAuYHeQ_fM%252C_%253BrDpCE_iXWGFP3M%252CDJqZ2P2agHLpqM%252C_%253BjUDGCnMLOCIBYM%252Cgo5EPJjDTbMSwM%252C_%253Bh_h6M4jzd4oDsM%252CPFQUVAuYHeQ_fM%252C_&usg=AI4_-kR6d07sI-X1nuKeec2GX5gubVycew&sa=X&ved=2ahUKEwjAsuHV1dj1AhWCMH0KHXIOCsMQ_B16BAgjEAE#imgrc=DmXGYSA7ya8gkM',
        type: 'english'
    };
    let tulip:Content;
    tulip={
      id: 2,
      title: 'Tulipa',
      description: 'The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white .',
      creator: 'Seed',
      imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimple.wikipedia.org%2Fwiki%2FTulip&psig=AOvVaw0RuQJoxlsOnpRIs-Io_fft&ust=1643680728780000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNim94Py2vUCFQAAAAAdAAAAABAH',
      type: 'english'
    };
    this.processFlower(rose);
    this.processFlower(tulip);
  
    
    this.lotsOfFlower=new ContentList(rose);
   
   console.log(this.lotsOfFlower.items);
   

    // let anotherFlower:FlowerList;
    // anotherFlower=new FlowerList(rose);
  }
  processFlower(flowerItem:Content):string{
    console.log(flowerItem.description);
    return flowerItem.description;
  }
} 

