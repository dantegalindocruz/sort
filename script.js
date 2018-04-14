// var text = document.querySelectorAll('.item p');
// var photoText = [];
// var gridContainer = document.querySelector('#grid');
// var nextContainer;
// var currentPhotoText = text[0].innerText;
// var currentContainer = text[0].parentNode;
// var beginningContainer;
//
// // for(var i = 0; i < text.length; i++){
// //   alert(text[i].innerText)
// // }
//
// // Makes the conatiner disappear which the text is inside
// // text[0].parentNode.style.display = 'none';
//
// for(var i = 0; i < text.length; i++){
//    photoText[i] = text[i].parentNode;
//  }
//
// for(var j = 0; j < photoText.length; j++){
//   if(photoText[j].innerText < currentPhotoText){
//     currentContainer = photoText[j];
//     photoText.push(currentContainer);
//     //photoText.unshift(beginningContainer);
//     //gridContainer.appendChild(photoText[j]);
//   }
// }
//
//
//    // if(text[i].innerText < currentPhotoText){
//    //   currentPhotoText = text[i].innerText;
//    //   currentContainer = text[i].parentNode;
//    //   nextContainer = text[i-1].previousSibling.parentNode;
//    //   // gridContainer.insertBefore(currentContainer, nextContainer);
//    //   gridContainer.appendChild(currentContainer);
//    // }

// var gridContainer = document.querySelector("#grid");
// var grids = document.querySelectorAll("#grid .item");
// var currentContainer;
// var gridArray = [];
// var d = [100,28,4,26];
//
//
// function bubbleSort(array){
//   var i, j, temp;
//
//   for(i = 0; i < array.length; i++){
//     for(j = 0; j < (array.length - i -1); j++){
//       if(array[j].innerText > array[j+ 1].innerText){
//         temp = array[j];
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }
//   }
//   return array;
// }
//
//
//
// for(var i = 0; i < grids.length; i++){
//   gridArray[i] = grids[i];
// }
// bubbleSort(gridArray);
//
// //
// for(var j = 0; j < gridArray.length; j++){
//     gridContainer.appendChild(gridArray[j]);
// }





//-------------------------------------------
var gridItems = document.querySelectorAll('.item');
var defaultHeight = gridItems[0].style.height;
var defaultWidth = gridItems[0].style.width;
for(var i =0; i < gridItems.length; i++){
gridItems[i].addEventListener('click', function(event){
    event.preventDefault();
  if(this.style.height === defaultHeight){
    this.style.backgroundColor= '#000';
    this.style.position= "relative";
    this.style.transition = 'height 0.5s ease-in 0s';
    // this.style.transition = 'width 0.5s ease-in 0s'
    this.style.height = '600px';
    this.style.backgroundColor= '#000';
    this.style.width= '90%';
  } else{
    this.style.position= "static";
    // this.style.transition = 'height 0.5s ease-out 0s';
    this.style.transition = 'width 0.5s ease-out 0s';
    this.style.width = defaultWidth;
    this.style.height= defaultHeight;
  }
});

}
