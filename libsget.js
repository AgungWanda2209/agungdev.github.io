window.onload=function(){

    this.getdata();

}




function getdata(){

    firebase.database().ref('v2021/').once('value').then(function(snapshot){
      

    var posts_div=document.getElementById('posts');


      posts.innerHTML="";
 

      var data=snapshot.val();

      console.log(data);


      for(let[key,value] of Object.entries(data)){

        posts_div.innerHTML="<div class='eka'>"
        +"<div class='cardagung'><p class='txtagung'>"+value.judul+"</p>"+
        "<a href='"+value.url+"'><button class='btnagung'>Download</button></a>"+
        "</div></div>"+posts_div.innerHTML;
      } 

      
      
    
        




    

});
  
}
