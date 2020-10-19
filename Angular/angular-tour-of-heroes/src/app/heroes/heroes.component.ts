import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    // 同步执行
    this.getHeroes();
  }
}
