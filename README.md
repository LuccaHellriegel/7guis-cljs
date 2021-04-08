This repo contains the tasks from the [7GUIs benchmark](https://eugenkiss.github.io/7guis/) implemented with ClojureScript and Reagent.

Live preview: https://luccahellriegel.github.io/7guis-cljs/index.html

### Notes

- in task 5: we allow duplicate names, alternatively we could add a (2) or similar to the name
- in task 7: the error of detected cycles / changing from correct to wrong inputs are not propagated
- some little copied functions exist in the task files because I wanted each file to be independent

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
