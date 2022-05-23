import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RatesService} from "../../service/rates.service";
import {CurrencyModel} from "../shared/currency.model";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(private http: HttpClient, private _ratesService: RatesService) { }

  ngOnInit(): void {
    this._ratesService.getRates().subscribe(
      (item: CurrencyModel[]) => {
        console.log(item);
      }
    )
  }

  getRates(): void {

  }

  //
  // onGridReady(params: GridReadyEvent): void{
  //   this.rowData$ = this.http
  //     .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  // }
  //
  // onCellClicked( e: CellClickedEvent): void {
  //   console.log('cellClicked', e);
  // }
  //
  // clearSelection(): void {
  //   this.agGrid.api.deselectAll();
  // }

}
