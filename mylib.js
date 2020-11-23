function touch(o1,o2){
    if(o1.x-o2.x < o1.width/2 + o2.width/2){
      return true
    }
  
    else{
      return false
    }
  }