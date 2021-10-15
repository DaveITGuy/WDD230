function addToList() {
    var getdata = document.querySelector('#infield').value;  
    var li = document.createElement('li');
    li.innerHTML = getdata;
    document.querySelector('#myList').appendChild(li);
}