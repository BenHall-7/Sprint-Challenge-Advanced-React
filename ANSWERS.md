- [ ] Why would you use class component over function components (removing hooks from the question)?

  Since functional components are more recent, despite their benefits and provided simplifications, legacy codebases may largely use class components. It can be argued they also provide better access to the lifecycles of components and organization of state.

- [ ] Name three lifecycle methods and their purposes.

  1. componentDidMount is used to run code when a component has been created and after it has been rendered to screen. This allows the end-user to see the component loaded without risking delays due to procedures like retrieving data from an API.

  2. render is the sole required method of the component lifecycle, that returns JSX code, which is transpiled into DOM manipulation methods and results in an HTML node.

  3. componentWillUnmount is used to clean up any resources that otherwise may cause memory leaks.

- [ ] What is the purpose of a custom hook?

  Custom hooks allow us to wrap our state functions in methods that can perform more actions for us behind the curtains.

- [ ] Why is it important to test our apps?

  If a part of the app somewhere doesn't perform as expected, it can cause deep, hard-to-track issues. By performing thorough tests on all functions we can minimize the amount of time it takes to debug an issue.
