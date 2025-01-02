# Automation Challenge
#### This challenge was made to continue studying automation with playwright

### Refresh Page

- Click the button that refreshes the page.
- Verify if the "refresh page" number has changed.

### Dynamic Buttons

- Click the "Start" button.
- Click button 1.
- Wait until button 2 appears.
    No hardcoded wait; it should wait dynamically until the element appears, whether it takes 1 second or 10 minutes.
- Click button 2.
- Wait until button 3 appears.
    No hardcoded wait; it should wait dynamically until the element appears, whether it takes 1 second or 10 minutes.
- Click button 3.
- Validate that the message "All Buttons Clicked" appears.
  
### Table Data

- Access the page and retrieve the "Name" and "Amount" from each row.
    Example return: "Row 1 - Alan 12"
  
### Alert Box Tests

- Click the "Show alert box" button.
- Validate the text displayed in the alert and click OK.
- Validate that the message "You triggered and handled the alert dialog" appears.
- Click the "Show confirm box" button.
- Validate the text displayed in the alert and click Cancel.
- Validate that the message "You clicked Cancel, confirm returned false." appears.
- Click the "Show prompt box" button.
- Enter your name in the alert and click OK.
- Validate that the message "You clicked OK. 'prompt' returned <your name>" appears.
  
### JavaScript Redirect Test

- Click the "Click to be transported in 5 seconds" button.
- Wait for the redirection.
- Validate that the URL has changed.
- Validate that the message "You have been successfully redirected." appears.
- Click the "Go back" button.
- Validate that the message "The items below, when clicked, will trigger a redirect." is displayed.
