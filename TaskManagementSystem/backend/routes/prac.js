let a = 2;

const fun1=()=>{
    a+=1;
    console.log(a);
    setTimeout(() => {
        fun1();
    }, 500);
    
   
}

// for(let i=0;i<;i++){
//   setTimeout(() => {
//     console.log(a);
//     a++;
//   },i*500);
// }

fun1();