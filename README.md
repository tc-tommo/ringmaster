# The Project Share™ ringmaster

8888888b.                   d8b                   888    
888   Y88b                  Y8P                   888    
888    888                                        888    
888   d88P 888d888 .d88b.  8888  .d88b.   .d8888b 888888 
8888888P"  888P"  d88""88b "888 d8P  Y8b d88P"    888    
888        888    888  888  888 88888888 888      888    
888        888    Y88..88P  888 Y8b.     Y88b.    Y88b.  
888        888     "Y88P"   888  "Y8888   "Y8888P  "Y888 
                            888                          
                          d88P                          
                        888P"                           
 .d8888b.  888                                           
d88P  Y88b 888                                           
Y88b.      888                                           
 "Y888b.   88888b.   8888b.  888d888 .d88b.              
    "Y88b. 888 "88b     "88b 888P"  d8P  Y8b             
      "888 888  888 .d888888 888    88888888             
Y88b  d88P 888  888 888  888 888    Y8b.                 
 "Y8888P"  888  888 "Y888888 888     "Y8888


![image](https://github.com/user-attachments/assets/7a2793c0-9345-4466-9707-b4488015d9d5)


This wee repo that handles the project share webring. Add your site to *sites.txt* to get started!

# Set it up
```
tommo.page
tomasmaillo.com
--> your site hostname (routes to www.(yoursite) 
```
The script is very dumb so take care to format correctly! or you will lose snack privileges for breaking it.

## Add the Script to Your Project:**
   - Option 1: Save `webring.js` in your site sources
   - Option 2: copy this
      `<script src="https://raw.githubusercontent.com/tc-tommo/ringmaster/refs/heads/main/webring.js"></script>`
     

## **Add buttons**
**YOU NEED 2 BUTTONS WITH IDS `webring-prev` and `webring-next`**:
### Example:
 ```html
 <!-- Example in your index.html -->
 <button id="webring-prev">Previous Site</button>
 <button id="webring-next">Next Site</button>
 
 <!-- Include the webring script -->
 <script src="js/webring.js"></script>
 </body>
 ```

## Customization
IDs must be `webring-prev` and `webring-next`, style as you wish

# Fix Problems
Problems are printed to the browser console.
- **Current Host Not Found:**  
  The script uses `window.location.hostname` (sans any leading `www.`). Ensure your Gist entries match the hostname as it appears in the browser.
- **No Sites Found:**  
  Check that your Gist file has valid, non-empty lines with the hostnames.
- **Console Errors:**  
  Any network or parsing errors will be printed to the browser console. Open the Developer Tools to view detailed error messages.


# I have a cool idea
Submit a PR!


