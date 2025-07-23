import mitt from "mitt";

const emitter = mitt();

emitter.on('test1', (data) => {
  console.log('test1 event received:', data);
});

emitter.on('test2', (data) => {
  console.log('test2 event received:', data);
});

export default emitter;
