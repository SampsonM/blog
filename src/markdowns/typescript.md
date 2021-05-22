# Typescript or Hype-script?

basics

It's a superset of JS, this means it compiles to JS but your JS might be less performant? - test this?

TS doesn't analyse your html to figure out if an .getElementById exists or if it even has certain properties so you have to typecast .
This means that when you use TS with frameworks such as Vue you don't get type checking in your template files. You can however use ENUMS in your template files.

