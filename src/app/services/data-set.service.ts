/**
 * framework imports
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
/**
 * plugin imports
 */
import {filter} from 'lodash'
/**
 * project imports
 */
import {Command} from '../models/command.model';
@Injectable()
export class DataSetService {

  constructor(private http: HttpClient) { }

  /**
   * Get the data sets from datasets.json
   * A fake data collection  created using https://next.json-generator.com/
   * @returns {Observable<any>}
   */
  getDataSets(): Observable<any> {
    return this.http.get('assets/data/datasets.json');
  }

  /**
   * Get commands based on the dataset Id and the language code
   * A fake data collection created using https://next.json-generator.com/
   * A filter is used here because the data is fake and stored in a single file
   * @param {string} id: dataSetId
   * @param {string} language: language code
   * @returns {Promise<any>}
   */
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
