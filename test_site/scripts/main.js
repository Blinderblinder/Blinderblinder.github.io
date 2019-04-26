let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/shiyuan.jpg')
        myImage.setAttribute('src', 'images/123.jpg');
    else
        myImage.setAttribute('src', 'images/shiyuan.jpg');
}

function setHeading(name)
{
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '石原里美是' + name + '的老婆!';
}

function setUsername()
{
    let myName = prompt('请输入你的名字', 'zyh');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName)
    setUsername();
else   
    setHeading(storedName);

let myButton = document.querySelector('button');
myButton.onclick = setUsername;
