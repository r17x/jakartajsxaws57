import ComponentNeedSuspense from "./dimana-github-user-component-berada";

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ComponentNeedSuspense />
  </Suspense>
);

export default App;
