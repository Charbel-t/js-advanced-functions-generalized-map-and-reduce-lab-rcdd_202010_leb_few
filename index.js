// Add your functions here
function map(src, callback){
  let r=[];
  for(let i=0;i<src.length;i++){
    let e=src[i];
    r.push(callback(e));
  }
  return r;
}

function reduce(src, callback, starting){
  let r= (!!starting) ? starting
}