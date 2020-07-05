import {Component, Input, OnInit} from '@angular/core';
import {BendBaseLangComponent} from 'bend-core-ui';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {StorageService} from "bend-core";

@Component({
  selector: 'ficket-bfu-seat-extract',
  templateUrl: './bfu-seat-extract.component.html'
})
export class BfuSeatExtractComponent extends BendBaseLangComponent implements OnInit {
  private structure: string;
  seatLinesList: string[];
  soldSeats: string[];

  constructor(
    translate: TranslateService,
    storageService: StorageService
  ) { super(translate, storageService); }

  @Input('seat-structure')
  set seatStructure(structure: string) {
    this.structure = structure;
    this.seatLinesList = this.rows();
  }

  @Input('sold-seats')
  set setSoldSeats(seats: string[]) {
    this.soldSeats = seats;
  }

  ngOnInit(): void {
    super.ngOnInit();
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
    return rows;
  }

  isSold(seat: string): boolean {
    return this.soldSeats.indexOf(seat) >= 0;
  }
}
