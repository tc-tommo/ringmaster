<h1 align="center">
    <a href="https://projectshare.comp-soc.com">Previous ⏮</a>
    <a href="https://tommo.page">⏭ Next</a>
</h1>
<br><br>

[![image](https://github.com/user-attachments/assets/66d23bd7-34c0-4b94-943e-ea60534462a0)](https://projectshare.comp-soc.com/)




<br><br>
# The Project Share™ ringmaster
This wee repo that handles the project share webring. Add your site to *sites.txt* to get started!

----
# Set it up
Go to [sites.txt](https://github.com/tc-tommo/ringmaster/edit/main/sites.txt) and submit a PR

```
tommo.page
tomasmaillo.com
--> your site hostname (routes to www.(yoursite) 
```
The script is very dumb so take care to format correctly! or you will lose snack privileges for breaking it.

## 1. Add the Script to Your Project:
   - **Option 1**: Save `webring.js` in your site sources
   - **Option 2**: copy this
```html
<script src="https://raw.githubusercontent.com/tc-tommo/ringmaster/refs/heads/main/webring.js"></script>
```

## 2. Previous/Next Buttons
**YOU NEED 2 BUTTONS WITH IDS `webring-prev` and `webring-next`**:
### Example:
 ```html
 <!-- Example in your index.html -->
 <button id="webring-prev">Previous Site</button>
 <button id="webring-next">Next Site</button>
 
 <!-- Include the webring script -->
 <script src="https://raw.githubusercontent.com/tc-tommo/ringmaster/refs/heads/main/webring.js"></script>
 </body>
 ```

## 3. Customization
IDs must be `webring-prev` and `webring-next`, style as you wish

## ! Fix Problems
Problems are printed to the browser console.
- **Current Host Not Found:**  
  The script uses `window.location.hostname` (sans any leading `www.`). Ensure your Gist entries match the hostname as it appears in the browser.
- **No Sites Found:**  
  Check that your Gist file has valid, non-empty lines with the hostnames.
- **Console Errors:**  
  Any network or parsing errors will be printed to the browser console. Open the Developer Tools to view detailed error messages.



<h1 align="center">THANKS FOR VISITING</h1>
<h1 align="center">
    <a href="https://projectshare.comp-soc.com">⏮</a>
    <a href="https://tommo.page">⏭</a>
</h1>





