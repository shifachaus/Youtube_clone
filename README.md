# Youtube clone

<!-- ## HOOKS

1. useState()
2. useEffect()

3. useMemo()

   - increase the performance of the app
   - lets you cache the result of a calculation between re-renders
   - expensive operation

   ```

   ```

4.
5. -->

<!-- 1. setup tailwind

   - npm install -D tailwindcss
   - npx tailwindcss init
   - Configure your template paths

   ```
   	content: [
   	"./src/**/*.{html,js,ts,jsx,tsx}",
   	],
   ```

   - Add the Tailwind directives to your CSS

   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. Planning

- Head
- Body
  - Sidebar
    - MenuItems
  - MainContainer
    - ButtonList
    - VideoContainer
      - VedioCard -->

<!--
`HOC` -
function that takes in a component return a component
SMALL MODIFICATION


`SEARCH`
making an api call

`debaouncing` :
    typing slow - each and every keystroke - diff. 200ms - suggestion
    typing fast - skipping some of the events - diff 30ms - no suggestion


`Perfomance`:
- Iphone pro max = 14 letter * 1000 = 140000
- with debouncing 3 API calls * 1000 = 3000


`Show Suggestion for better UX`

`Debouncing` with 200ms
    - if keystroke between 2 key strokes is < 200ms  - DECLINE API CALL
    - > 200MS - Make an api call
-->

<!--

  /***
   *
   * Make an api call after every key press but if the difference
   * between 2 API calls is <200ms
   * decline the API call
   *
   * key = i
   * - render the component
   * - call useEffect()
   * - start timer ==> make an api call after 200 ms
   *
   * key - ip
   * - destroy the component (call useEffect return method)
   * - re-render the component
   * - call useEffect (make an api call)
   * - new* start timer -> (make an api call) after 200 ms
   *
   *
   * setTimeout()200ms - declines
   *
   * change
   * - onchange method
   * - changing the state variable
   * - triggers the reconciliation preocess
   * - render once again
   *
   *
   * NEW* TIMER -> fast typing -> declines the `API` call

Structure cache
 *	time complexity to search in arra B(n)

- time complexity to search in Object B(1) - better
-->

<!--
Search -
  Live api
  caching
  debouncing

LRU CACHE - LEAST RECENTLY USED
RESTRICT THE CACHE OBJETC TO STORE 100 KEYS
REMOVE FROM START

FIFO
LIFO
 -->

<!--
COMMENTS

2 LEVEL DEEP - Basic , Reply
n Level nested commnets

UI + DSA + RECURSION

-->

<!--
  streaming chat


-->

<!--
Live chat

  Web Socket - NO INTERVALS
  API polling - INTERVALS like: 1ms 3sm



 -->
