This repo contains the tasks from the [7GUIs benchmark](https://eugenkiss.github.io/7guis/) implemented with ClojureScript and Reagent.

Live preview: https://luccahellriegel.github.io/7guis-cljs/index.html

Know a more idiomatic way to solve something? Be sure to open an issue and let me know!
README is WIP.

## Features and Limitations

Counter counts blue.

Draw Circle: wanted to just have one present, so need to work around with the select.

### Notes

- the layout and functionality is as close to the sparse 7GUIs spec as makes sense with some embellishments
- I have documented some design decisions in the code together with alternative approaches
- I have opted to use multiple atoms where the GUI was simple enough to not merit using cursors
- in some tasks I have included test data to make testing the features easier, the data can be removed by searching "Test-Data" and removing the corresponding code-block
- some little copied functions exist in the task files because I wanted each file to be independent
- in task 5: we allow duplicate names, alternatively we could add a (2) or similar to the name
- in task 7: the error of detected cycles / changing from correct to wrong inputs are not propagated

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
