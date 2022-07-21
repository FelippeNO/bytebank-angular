import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() valor: number = 0;
  @Input() destino: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
