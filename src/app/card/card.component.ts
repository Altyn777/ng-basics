import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title = 'My Card Title'
  text = 'My sample text'

  ngOnInit(): void {
  }

  changeTitle() {
    this.title = 'Changed'
  }

  changeHandler() {
    console.log(this.title)
  }
}
