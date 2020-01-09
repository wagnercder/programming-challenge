# Programming Challenge

This project consists in three parts. Each item is important and relevant to the upcoming steps.

## Step 1

The first step consists in analyzing the data in the files:
- _title.basics.tsv.gz_
- _title.ratings.tsv.gz_
- _name.basics.tsv.gz_

The data in _title.basics.tsv.gz_ contains the following information for titles:
- __tconst__ (_string_) -- alphanumeric unique identifier of the title;
- __titleType__ (_string_) -- the type/format of the title (e.g. movie, short, tvseries, tvepisode, video, etc);
- __primaryTitle__ (_string_) -- the more popular title / the title used by the filmmakers on promotional materials at the point of release;
- __originalTitle__ (_string_) -- original title, in the original language;
- __isAdult__ (_boolean_) -- 0: non-adult title; 1: adult title;
- __startYear__ (_YYYY_) -- represents the release year of a title. In the case of TV Series, it is the series start year;
- __endYear__ (_YYYY_) -- TV Series end year.  '\N' for all other title types;
- __runtimeMinutes__ -- primary runtime of the title, in minutes;
- __genres__ (_string array_) -- includes up to three genres associated with the title.

The data in _title.ratings.tsv.gz_ contains the following information for ratings:
- __tconst__ (_string_) -- alphanumeric unique identifier of the title;
- __averageRating__ -- weighted average of all the individual user ratings;
- __numVotes__ -- number of votes the title has received.

The data in  _name.basics.tsv.gz_ contains the following information for names:
- __nconst__ (_string_) - alphanumeric unique identifier of the name/person;
- __primaryName__ (_string_)– name by which the person is most often credited;
- __birthYear__ – in YYYY format;
- __deathYear__ – in YYYY format if applicable, else '\N';
- __primaryProfession__ (_array of strings_)– the top-3 professions of the person;
- __knownForTitles__ (_array of tconsts_) – titles the person is known for.

You need to generate a model that represents such data and create a database to be further used in your project.

## Step 2

You have to implement a REST API to consume the generated database.

Moreover, you need to implement at least the following methods:
- List movies (with their relevant data) filtered by category;
- List the top 10 movies (in terms of rating) filtered by year. If no year is given as parameter, the API should list all movies with pagination;

In both cases, the API should remove both adult movies and/or with rating less than 6.

## Step 3

You have to implement a client application to access such API. The client should be preferably an Android, WPF, or web application.

The client application must present the data from the API for the methods specified in Step 2.

## Deliverables

You have to deliver:
- A document with all relevant information and decisions that you made throughout the development. Feel free to write down your architectural decisions, the design patterns you used, the languages you chose, your testing scenarios, and so on;
- All required details to install/run/test both your API and client applications;
- Any other artifact you find relevant for your overall evaluation;

## Tips

- For Steps 1 and 2, we suggest you to use one of the following languages: C#, Java, or Python;
- Testing is more than welcome;
- Show us everything you know about best practices in Git;
- Think carefully about your code quality, in terms of maintainability, readability, and simplicity. Also, do not overenginer your solution;
- Keep in mind that we want to know how you create your solution from scratch.
