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
          contentDiv.innerHTML = `
          <h2>AboutUs </h2>
          <p> This is the baout page content. Learn more
          about our purpose or team . </p>
          <p> We're passionate about creating engaging and informative SPAs.
          </p>
          
          `;
          break;
          case 'contact' :
            contentDiv.innerHTML =
            `
            <h2> Contact Us </h2>
            <p>
            Feel free to reach us !!
            </p>
            <form>
            <label for = "name">Name: </label>
            <input type ="text" id="name" name= "name"
            placeholder = "Your Name" required>
            <label for = "email">Email </label>
            <input type ="email" id="email" name= "email"
            placeholder = "Your email" required>
            <label for = "message">message: </label>
            <textarea id="message" name= "message"
            placeholder = "Your message" rows="4" required>
            </textarea>
            <button type = "submit"> Send message </button>
            </form> ` ;
            break;
            default: 
            contentDiv.innerHTML = `<h2> Page Not found! </h2>`;
            
    }
}