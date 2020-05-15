import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ficket-bfu-seat-extract',
  templateUrl: './bfu-seat-extract.component.html'
})
export class BfuSeatExtractComponent implements OnInit {
  private structure: string;
  seatLinesList: string[];
  soldSeats: string[];

  constructor() { }

  @Input()
  set seatStructure(structure: string) {
    this.structure = structure;
    this.seatLinesList = this.rows();
  }

  @Input()
  set soldSeat(seats: string[]) {
    this.soldSeats = seats;
  }

  ngOnInit(): void {
    this.structure = null;
    this.seatLinesList = [];
  }

  rows(): string[] {
    if (this.structure == null || this.structure.length <= 0) return [];
    const rowRows = this.structure.split(':');
    const rows = [];

    for (let i = 0; i < rowRows.length; i++) {
      const cols = rowRows[i].split('|');
      const colList = [];
      for (let j = 0; j < cols.length; j++) {
        const colExts = cols[j].split('-');
        colList.push(colExts);
      }
      rows.push(colList);
    }
    console.log(rows);
    return rows;
  }

  isSold(seat: string): boolean {
    return this.soldSeats.indexOf(seat) >= 0;
  }
}
