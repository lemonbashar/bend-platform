import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ficket-bfu-seat-extract',
  templateUrl: './bfu-seat-extract.component.html'
})
export class BfuSeatExtractComponent implements OnInit {
  private structure: string;
  rowList: string[];

  constructor() { }

  @Input()
  set seatStructure(structure: string) {
    this.structure = structure;
    this.rowList = this.rows();
  }

  ngOnInit(): void {
    this.structure = null;
    this.rowList = [];
  }

  rows(): string[] {
    if (this.structure == null || this.structure.length <= 0) return [];
    const rowRows = this.structure.split(':');
    const rows = [];

    for (let i = 0; i < rowRows.length; i++) {
      const cols = rowRows[i].split('|');
      rows.push(cols);
    }

    return rows;
  }
}
