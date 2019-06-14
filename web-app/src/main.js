import MyWorker from "worker-loader!./worker.js";

function add(a, b) {
  import('../../rs-lib/pkg/rs_lib_bg.wasm').then(mod => {
    const result = mod.add(b, b);
    console.log(`Result of add(${a}, ${b} = ${result}`);
  })
}

document.querySelector('#btn-add-with-wasm').onclick = () => {
  worker.postMessage([8, 8]);
};

document.querySelector('#btn-add-with-worker').onclick = () => {
  // worker.postMessage([8, 8])
  console.log("TODO");
};

document.querySelector('#btn-add-with-worker-wasm').onclick = () => {
  // worker.postMessage([8, 8])
  console.log("TODO");
};

var worker = new MyWorker();

worker.onmessage = function(e) {
  console.log('Message recieved from worker:', e.data);
};
