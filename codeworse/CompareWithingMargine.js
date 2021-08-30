function closeCompare(a, b, margin){
    if(margin==undefined){
        margin=0;
    }
    if((b-a)<margin)
    return 0;
    console.log(margin);
 if((a+margin)<b){
   console.log(-1);
 }else if((a+margin)==b){
     console.log(0);
 }else {
 console.log(1);
 }
}


closeCompare(3283,-4741, 8103);
