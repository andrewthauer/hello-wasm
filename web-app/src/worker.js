console.log('I am a worker!');

function greetWasm() {
  // const js = import(
  //   '../hello-wasm-rs/pkg/hello_wasm.js'
  // );

  // js.then(js => {
  //   js.greet('WebWorker Calling WebAssembly!!');
  // });
}

greetWasm();

onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);

  console.log('Posting message back to main script');
  postMessage(workerResult);
}
