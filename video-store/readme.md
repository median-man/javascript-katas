# Video Store Kata
This Kata is a practice in refactoring based on ["Refactoring a JavaScript Video Store"][mf-video-store] by [Martin Fowler][mf-home].

Refactor the initial code found in starterCode.js. The code works on two json structures--a customer record, and a movie.
```json
Customer Record:
{
  "name": "john",
  "rentals": [
    {"movieID": "F001", "days": 3},
    {"movieID": "F002", "days": 1},
  ]
}

Movie:
{
  "F001": {"title": "Ran",                     "code": "regular"},
  "F002": {"title": "Trois Couleurs: Bleu",     "code": "regular"},
  // etc
}
```

The statement method prints a text output for a rental statement:
```
Rental Record for john
  Ran 3.5
  Trois Couleurs: Bleu 2
Amount owed is 5.5
You earned 2 frequent renter points
```

## Motivation to Refactor
Update the code to render the statement in HTML.
```HTML
<h1>Rental Record for <em>john</em></h1>
<table>
  <tr><td>Ran</td><td>3.5</td></tr>
  <tr><td>Trois Couleurs: Bleu</td><td>2</td></tr>
</table>
<p>Amount owed is <em>5.5</em></p>
<p>You earned <em>2</em> frequent renter points</p>
```

## Steps
Follow the steps presented by Fowler in the [article][mf-video-store] to practice and better understand Fowler's approach to refactoring the statement function into smaller functions that each have a single, well defined responsibility.
0. Write test for initial code.
1. Decompose statement function into smaller functions.
2. Refactor using a parameter to determine the output.
3. Refactor using top-level functions.
4. Refactor using classes (es6 class syntax or factory methods)

<!-- links -->
[mf-home]: https://martinfowler.com/
[mf-video-store]: https://martinfowler.com/articles/refactoring-video-store-js/