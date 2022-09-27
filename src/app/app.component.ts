import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-type-taxonomy-finder';
  testName: string = '';
  testTypes?: any;
  currentTest: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        'https://raw.githubusercontent.com/dvsa/cvs-svc-test-types/develop/tests/resources/test-types.json'
      )
      .pipe(take(1))
      .subscribe({
        next: (testTypes) => {
          this.testTypes = testTypes;
        },
        error: () => {
          this.testName = 'Could not get the information for github...';
          this.testTypes = undefined;
        },
      });
  }

  handleChange(event: string) {
    const match = this.findTestTypeNameById(event, this.testTypes);
    if (match) {
      const { suggestedTestTypeDisplayName, testTypeName, name } = match;
      delete match.testCodes;
      delete match.nextTestTypesOrCategories;
      this.currentTest = match;
      const final_name =
        suggestedTestTypeDisplayName || testTypeName || name || '-';
      this.testName = final_name;
    } else {
      this.testName = 'Invalid test type id';
      this.currentTest = undefined;
    }
  }

  findTestTypeNameById(id: string, testTypes: Array<any>): any | undefined {
    if (!testTypes) {
      return;
    }
    function idMatch(testType: any) {
      if (testType.id === id) {
        result = testType;
        return true;
      }

      return (
        testType.hasOwnProperty('nextTestTypesOrCategories') &&
        testType.nextTestTypesOrCategories!!.some(idMatch)
      );
    }

    let result;
    testTypes.some(idMatch);
    return result;
  }
}
