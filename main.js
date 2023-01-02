document.getElementById("form").addEventListener("submit", (event ) => {
  event.preventDefault();
  const result = document.getElementById("result");

  if(window.Worker) {
    const worker = new Worker('worker.js');
    worker.postMessage(+event.target.children[0].children[0].value)

    worker.onmessage = workerResponse => {
      result.innerHTML = workerResponse.data;
    }
  }
});
