declare global {
    interface Window {
      _smartsupp: any; 
    }
  }
  
  // This is necessary to make the file a module, so it can be included by TypeScript.
  export {};
  