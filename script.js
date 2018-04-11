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

var gridContainer = document.querySelector("#grid");
var grids = document.querySelectorAll("#grid .item");
var currentContainer;
var gridArray;

function changeNodeListToArray(nodeList){
  var nodeArray = [];
  for(var i = 0; i < nodeList.length; i++){
    nodeArray[i] = nodeList[i];
  }
  return nodeArray;
}
function alphabetize(array){
  var i, j, temp;

  for(i = 0; i < array.length; i++){
    for(j = 0; j < (array.length - i -1); j++){
      if(array[j].innerText > array[j+ 1].innerText){
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

function reverseOrder(array){
  var i, j, temp;

  for(i = 0; i < array.length; i++){
    for(j = 0; j < (array.length - i -1); j++){
      if(array[j].innerText < array[j+ 1].innerText){
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}



function printToScreen(array){
  for(var j = 0; j < array.length; j++){
      gridContainer.appendChild(array[j]);
  }
}


gridArray = changeNodeListToArray(grids);
alphabetize(gridArray);
printToScreen(gridArray);
