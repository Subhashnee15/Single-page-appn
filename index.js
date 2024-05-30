function changeContent(page) {
    var contentDiv = document.getElememtById('content');
    switch(page) {
       case 'home' :
        contentDiv.innerHTML = `
        <img src = 
        "https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-12.png">
        <h2>
        Welcome to the Home Page!
        </h2>
        <p> 
        This is the main page for our SPA
        </p>
        <p>
        Explore the different section of the web page
        </p>
        ` ;
        break;
        case 'about' :
            
    }
}