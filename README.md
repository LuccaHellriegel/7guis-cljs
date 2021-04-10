This repo contains the tasks from the [7GUIs benchmark](https://eugenkiss.github.io/7guis/) implemented with ClojureScript and Reagent.

Live preview: https://luccahellriegel.github.io/7guis-cljs/index.html

Know a more idiomatic way to solve something? Be sure to open an issue and let me know!

Below I have detailed some design decisions, alternatives, limitations and the main features. Besides that I have taken care to comment many decisions in the code.

The current implementation is as far as I can tell bug-free and fulfills the 7GUIs spec.
Generally, I have kept as close to the 7GUIs spec in terms of layout and functionality as made sense.
In some tasks I have included test data to make testing the features easier. The data can be removed by searching "Test-Data" and removing the corresponding code-block.

# Tasks

## Task 1: Counter

Its a counter. What does it do? I counts <s>blue</s> things.

## Task 2: Temperature Converter

### <u>**Description:**</u>

Converts Fahrenheit to Celsius and back.

### <u>**Implementation:**</u>

The required bidirectionality is trivial with atoms. My version only supports US-numbers (with ".") but could be easily expanded to support European numbers (with ",").

I have used two atoms for simplicity but usage of cursors or just referencing one "state"-atom would be possible as well.

## Task 3: Flight Booker

### <u>**Description:**</u>

Allows you to choose flights with or without return and book them.

### <u>**Implementation:**</u>

My first solution used mutliple atoms because the cursor-code clutters the file a little, but if this were a real app, the state would soon grow much more (e.g. user information, more fields...), so for demo purposes I switched to one atom.

A possible improvement would be a debounce to wait until the user has typed to check if the entered date is valid.

My favorite part of the solution is the reg-ex that I use to check the date and also extract the numbers for comparison. The usage of capturing groups makes the comparison trivial.

## Task 4: Timer

### <u>**Description:**</u>

Observe the timer and a gauge of the passed time, determine the maximum duration of the timer with the slider.

### <u>**Implementation:**</u>

The interesting thing about this task is that you should be able to restart the timer if you increase the maximum duration with the slider. I implemented this by comparing the elapsed time and the maximum duration and using the result as a prop. This could probably be implemented via a Reagent-Reaction too. For simplicity reasons I have used two atoms (my rule of thumb was to use one "state"-atom once I would have needed three single atoms otherwise).

## Task 5: CRUD

### <u>**Description:**</u>

The mother of all business applications. Create, read, update, delete or filter the names in the "database".

### <u>**Implementation:**</u>

Two implementation details are interesting here: the spec does not say anything about duplicates or empty names. Empty names are allowed in this implementation. I have also allowed duplicates and added a time-stamp on creation to differentiate them. Because Reagent uses "=" for comparison the re-render would have problems otherwise. Also, (de-)selection, deletion and update would not work as expected if there was no difference between duplicate names.

## Task 6: Circle Drawer

### <u>**Description:**</u>

Draw circles or select existing ones with left-click. A right click on a selected circle opens a pop-up where you can change the diameter of the selected circle. The undo/redo buttons do what you would expect: undo/redo circle creations and diameter change.

### <u>**Implementation:**</u>

#### _Pure function:_

React and Canvas are not the best fit in general (declarative vs imperative). Libraries exist that offer good abstractions, but I wanted to keep this repo dependency free (besides Reagent / React...).
Alternatively I could have used SVG, but I settled on a pure "f(circles)=canvas" approach, where I redraw the canvas if the circle-vector changes.

#### _Single circle-vector:_

Because I wanted to just have one circle-vector, I included a type for the circle-elements, so only the newest circles / updates are drawn (because as I wrote above, its possible to update the diameter - but the diameter change needs to be able to be redone/undone as its own change. So the change is just another circle with a ":update" type.).

#### _Improvement:_

A possible improvement would be to keep the selected circle separate from the others. Right now the selected circle is always the last one in the vector, which allows the drawing process described above to only draw the selected version of the circle. Depending on the direction of the development, singling out the selected circle or using just a single vector are valid trade-offs.

## Task 7: Cells

### <u>**Description:**</u>

The "Hello World" for functional programming and GUI enthusiasts: Excel-Light.
Enter and evaluate formulas, propagate changes to all dependant cells.

### <u>**Implementation:**</u>

#### _Parsing:_

To keep the project dependency-free, I have implemented my own evaluation function for formulas and haven't used a parser library. The evaluation function (if the formula is valid) just evluates and replaces all formula-functions (e.g. add(A0,A1)) in the formula and - once the formula is just made up of math operations and numbers - hands it to the js/eval function (this should be safe - except for eval-exploits that work with only numbers, math and brackets). Most number-formulas are valid JavaScript code (except e.g. power-operations). Alternatively, I could have parsed the formula completely to Clojure-code. This task is underspecified in respect to what formulas need to be supported exactly, so the js/eval-implementation is a reasonable approach.

#### _Change propagation:_

For the data structure, I have chosen a simple map where each cell contains the attributes value / formula and dependencies. The change propagation is then just iterating over all cells and checking if the changed cell is part of the dependencies and re-calculating if it is the case. To make sure we do not get stuck in cycles, we perform a depth-first search on the data structure - which is basically a directed graph - and do not propagate if we find a cycle or if the formula is invalid in other ways.

#### _Improvement:_

A possible improvement is to differentiate the ways in which the formula is wrong and display that to the user and also propagate the error somewhat (e.g. until we start cycling) so the user better knows which cells are affected.
In general, the possibilities for extension are endless (just look at Google Table and its autocomplete features etc.).

# Developer instructions

### Development mode

```
npm install
npx shadow-cljs watch app
```

start a ClojureScript REPL

```
npx shadow-cljs browser-repl
```

### Building for production

```
npx shadow-cljs release app
```
