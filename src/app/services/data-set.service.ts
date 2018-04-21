import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Command} from '../models/command.model';
import {filter} from 'lodash'
@Injectable()
export class DataSetService {

  constructor(private http: HttpClient) { }

  getDataSets(): Observable<any> {
    return this.http.get('assets/data/datasets.json');
  }

  getDataSetCommands(id: string, language?: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get('assets/data/commands.json').subscribe(
        (commands: Command[]): void => {
            resolve(
              filter(
                commands,
                language ? {'dataSetId': id, language} : {'dataSetId': id}
                )
            );
        }, reject
      )
    });
  }
}
