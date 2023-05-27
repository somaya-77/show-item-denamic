// get body page
let body = document.querySelector('body');
/* Create Container Page */
let container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

// Add Header Page
let headerPage = document.createElement('header');
let mainHeader = document.createElement('div');
container.appendChild(headerPage)
mainHeader.className = "main-header";
headerPage.appendChild(mainHeader);

// Add Logo
let logo = document.createElement('div');
logo.className ='logo';
let logoText = document.createTextNode('Elzero');

// append this logo
mainHeader.appendChild(logo);
logo.appendChild(logoText);

// Add Links
let linksHeader = document.createElement('div');
linksHeader.classList = 'links';
let ul = document.createElement('ul');
let liLinks = [
    "Home",
    "About",
    "Service",
    "Content"
];
liLinks.forEach(function (e) {
    let li = document.createElement('li');
    li.innerText = e;
    ul.append(li);

    li.style.cssText = "list-style: none; font-size: 20px; color: #fff; margin-right: 20px;  cursor: pointer";
});
// append ul 
mainHeader.appendChild(linksHeader);
linksHeader.appendChild(ul);
/***********************  Style Container & Header  ****************************/
body.style.cssText = "margin: 0; padding: 0; box-sizing: border-box; font-family: Tahoma, Verdana, sans-serif";
mainHeader.style.cssText = "display: flex; justify-content: space-between; align-items: center; background-color: red; padding: 0px 50px";
logo.style.cssText = "font-weight: bold; font-size: 26px; color: #fff; padding: 0 20px";
ul.style.cssText = "display: flex";
/*******************  End Header  ****************************/

//##########################################################

/*******************  Create Contain  ***********************/
// Create Content Page
let content = document.createElement('div');
content.classList = 'content';

// Append the content
container.appendChild(content);
// creat number product

for(let i = 1; i<= 15; i++){
    let prodect = document.createElement('span');

    prodect.appendChild(document.createTextNode(i))
    content.appendChild(prodect);

    let prodectText = document.createElement('p');
    prodectText.appendChild(document.createTextNode("product"))
    prodect.appendChild(prodectText);

    prodect.style.cssText = "text-align: center; margin: .5%; background: #fff; width: calc((97%) / 3); display: inline-block; height: 105px; line-height: 105px; font-size: 23px";
    prodectText.style.cssText = "display: contents; color: #777"
}
/*******************  Start Style Content  ************************/ 
content.style.cssText = "background: #eee; width: 100%;";
/*******************  End Style Content  ************************/ 
//##############################################################
/*********************  Create  Footer  ***************************/
// Add Header Page
let footer = document.createElement('footer');
body.appendChild(footer)
let copyright = document.createElement('p');
copyright.appendChild(document.createTextNode("Copyright 2023"))
footer.appendChild(copyright);
/*******************  Start Style footer  ************************/ 
footer.style.cssText = "background-color: red; padding: 6px"
copyright.style.cssText = "color: #fff; text-align: center"
/*******************  End Style footer  ************************/ 
































