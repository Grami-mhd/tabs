import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataSet} from '../../models/DataSet.model';
import {DataSetService} from '../../services/data-set.service';
import {find} from 'lodash'
import {Command} from '../../models/command.model';
@Component({
  selector: 'app-intent-recognition',
  templateUrl: './intent-recognition.component.html',
  styleUrls: ['./intent-recognition.component.scss']
})
export class IntentRecognitionComponent implements OnInit {

  public selectedDataSet: DataSet;
  public dataSets:        DataSet[];
  public commands:        Command[];
  public selectionForm:   FormGroup;

  constructor(private dataSetService: DataSetService) { }

  ngOnInit() {
    this.dataSetService.getDataSets().subscribe(
      (dataSets: DataSet[]): void => {
        this.dataSets = dataSets;
        this.initForm();
      }
    );
  }

  private initForm(): void {
    const
      dataSetControle = new FormControl(
        this.dataSets.length ? this.dataSets[0].id : '',
        Validators.required
      ),
      languageControle = new FormControl(
        // tslint:disable-next-line:max-line-length
        this.dataSets.length ? this.dataSets[0].languages.length ? this.dataSets[0].languages[0].code : '' : '',
        Validators.required
      );
    if (this.dataSets.length) {
      this.selectedDataSet = this.dataSets[0];
    }
    dataSetControle.valueChanges.subscribe(
      (newDataSet: string): void => {
        const  selected = find(this.dataSets, {'id': newDataSet});
        this.selectedDataSet = selected;
        languageControle.setValue(
          selected.languages.length ? selected.languages[0].code : '',
        {emitEvent: false}
        );
      }
    );
    this.selectionForm = new FormGroup({
      dataSet: dataSetControle,
      language: languageControle
    });
    this.selectionForm.valueChanges.subscribe(
      (newData: any): void => {
        this.getCommands(newData);
      }
    );
    this.getCommands(this.selectionForm.value);
  }

  private getCommands(values: any): void {
    this.dataSetService.getDataSetCommands(values.dataSet, values.language).then(
      (commands: Command[]): any => this.commands = commands
    )
  }
}
