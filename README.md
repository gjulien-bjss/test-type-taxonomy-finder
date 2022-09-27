# Test Type Taxonomy Finder

The website is available [here](https://gjulien-bjss.github.io/test-type-taxonomy-finder/).

A very quick not very nice website for finding the name of a test type from the test type id. This website pulls the current information from the [cvs-svc-test-types](https://github.com/dvsa/cvs-svc-test-types/blob/develop/tests/resources/test-types.json) file and walks down the file to find the correct name for the test type. The logic behind the selection of which test type name to show is as follows:

> suggestedTestTypeDisplayName -> testTypeName -> name

Future improvements would involve displaying the full path to finding the test type in the taxonomy.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
