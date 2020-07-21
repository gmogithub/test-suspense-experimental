import React from 'react';
import './App.css';
import { AllPosts } from "./cmp/AllPosts";
import { AllPostSuspense } from "./cmp/AllPostSuspense";

function App() {
  return (
    <div className="App">
      <div style={{ flex: 1, border: "5px solid red", overflow: "auto" }}>
        <AllPosts/>
      </div>
      <div style={{ flex: 1, border: "solid green 5px", overflow: "auto" }}>
        <React.Suspense fallback={<div>loading</div>}>
          <AllPostSuspense/>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
