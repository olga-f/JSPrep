import JSrunner from "javascript-code-runner";
addEventListener("message", (e) => {
  postMessage(JSrunner(e.data));
});
