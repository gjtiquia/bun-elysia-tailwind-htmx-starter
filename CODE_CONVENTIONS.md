# code conventions

## general

- user experience guides all decisions
- avoid over-engineering
- keep things minimal and simple
- code should read cleanly when reading top-to- bottom, or when tracing the flow
- use browser defaults and server rendering as much as possible, followed by htmx, followed by frontend js
    - tho user experience is king. eg. a UI loading state if needs frontend js, then let it be
- Locality of Behaviour (LoB)
    - https://htmx.org/essays/locality-of-behaviour/
    - enables a programmer to understand that source by looking at only a small portion of it.

## typescript

- function ordering, as pragmatic as possible, order from high level to low level functions, so it reads nicely
- avoid try catch, prefer never throwing, prefer explicit handling, Golang-type error handling
- add "Async" suffix for async methods so we will not forget to await it
- ternary operations are great when short, avoid when hurts readability
- if statements if its too convoluted and long, consider splitting into different bools

### frontend scripts

- reference [rsjs - Reasonable System for JavaScript Structure](https://ricostacruz.com/rsjs/)
    - `data-js-scriptName` attribute on elements with `scriptName.ts` as the corresponding script for that attribute

## html

- keep things simple, dont overengineer
- dont add attributes and elements unless discussed

## tailwind classes

- prefer simple solutions, dont over engineer
- avoid margins as much as pragmatically possible
- avoid custom numbers as much as possible, use tailwind defaults first
- flexboxes are a great default for most cases
- dont add unspecified behavior unless agreed before hand
- keep text variants a limited set, be consistent with text size
- use consistent colors, eg. consistent shades of gray

## docs

- docs that are written well and easy to read for humans are also easy to read for AI
- dont duplicate docs
    - eg. code architecture does not necessarily need to be written, if it is hard to understand the code architecture then its a problem with folder structuring and file naming
    - eg. concerns that are not trivially self-documented by the code should be written as comments near relevant code (kind-of Locality of Behaviour)
- docs rationale is that any human / agent can easily onboard and get productive instantly
- docs are often written by one person but read by many, respect the reader's time, longer is not better ([ref](https://x.com/NCResq/status/2087040147091308711))
