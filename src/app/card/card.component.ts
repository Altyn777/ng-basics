import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-card',
  // template: `
  //   <div class="card">
  //     <h2>Card component</h2>
  //     <p>
  //       qwertyuiop[]\\asdfghjkl;'zxcvbnm,./qwertyuiop[]\\asdfghjkl;'zxcvbnm,./qwertyuiop[]\\asdfghjkl;'zxcvbnm,vzxcvbnm,./</p>
  //   </div>
  // `,
  // styles: [
  //   `
  //     .card {
  //       padding: .5rem 1rem;
  //       border: 1px dashed #ccc;
  //       margin-bottom: 1rem;
  //     }
  //
  //     h2 {
  //       margin-bottom: .5rem;
  //     }
  //   `
  // ]
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // interpolation: ['{{', '}}'], // по умолчанию
})
export class CardComponent implements OnInit {
  title = 'My Card Title'
  text = 'My sample text'
  // number = 42
  // array = [1, 1, 2, 3, 5, 8, 13]
  // obj = {name: 'Altyn', info: {
  //   age:22, job: 'Front-end'
  //   }
  // }

  imgUrl: string = 'https://pm1.narvii.com/6870/5936de1640bf1fab70fea18ad06bbb45ba97a6der1-512-512v2_128.jpg'

  ngOnInit(): void {
    console.log('ngOnIint')
    setTimeout(() => {
      this.imgUrl = 'https://66.media.tumblr.com/avatar_ced0e61bc527_128.pnj'
    }, 3000)
  }

  getInfo(): string {
    return 'This is fine'
  }
}
