
var isClicked = function () {
   var foldBtns = document.getElementsByClassName("fold-button");
   var displayState = "block";
   for (var i = 0; i < foldBtns.length; i++) {
      foldBtns[i].addEventListener("click", function (e) {
         if (e.target.className == "fold-button folded") {
            e.target.innerHTML = "свернуть";
            e.target.className = "fold-button";
            displayState = "block";
         }
         else {
            e.target.innerHTML = "развернуть";
            e.target.className = "fold-button folded";
            displayState = "none";
         }
         e.target
            .parentElement
            .getElementsByClassName('article-author')[0]
            .style.display = displayState;
         event.target
            .parentElement
            .getElementsByClassName('article-created-date')[0]
            .style.display = displayState;
         event.target
            .parentElement
            .getElementsByClassName('article-text')[0]
            .style.display = displayState;
      });
   }
};
//isClicked(); 

function getArticle(el) {
   if (el.parentElement.parentElement.className == "one-post folded") {
      el.innerHTML = "Развернуть";
      el.parentElement.parentElement.className = "one-post";
   }
   else {
      el.innerHTML = "Свернуть";
      el.parentElement.parentElement.className = "one-post folded"
   }
}