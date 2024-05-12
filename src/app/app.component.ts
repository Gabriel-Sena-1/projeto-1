import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewChecked{
  title = 'projeto-1';
  
  constructor(){
    console.log("Component constructor")
  }
  ngAfterContentChecked(): void {
    console.log("Component Content Checked")
  }
  ngAfterViewChecked(): void {
    console.log("Component View Checked")
  }
  ngOnDestroy(): void {
    console.log("Component Content Destroy")
  }
  ngAfterContentInit(): void {
    console.log("Component Content Init")
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change")  
  }
  
  ngOnInit(): void {
    console.log('Component OnInit')
    this.title = 'Novo titulo, de novo'
  }
  
  ngDoCheck(): void {
    console.log("Component DoCheck")
  }

  mudarTexto(){
    for (let i = 0; i < 20; i++) {
      this.title += " De novo"
    }
  }

}
