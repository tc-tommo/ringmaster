
<h1 align="center">
  <a href="https://projectshare.comp-soc.com">previous...</a>
  <a href="https://projectshare.comp-soc.com/">
    <img src="https://github.com/user-attachments/assets/66d23bd7-34c0-4b94-943e-ea60534462a0" alt="image" style="max-width: 100%; height: auto;">
  </a>
  <a href="https://tommo.page">...next</a>
</h1>

<br><br>


# ⭕ The Project Share™ webring manager 
This wee repo that handles the project share webring. Add your site to *sites.txt* to get started!


<br><br>

----
# 📐 Set it up
### 1. Go to [sites.txt](https://github.com/tc-tommo/ringmaster/edit/main/sites.txt) and submit a PR

```
tommo.page
tomasmaillo.com
--> your site hostname (routes to www.(yoursite) 
```
The script is very dumb so take care to format correctly! or you will lose snack privileges for breaking it.

### 2. Include `webring.js`
   - **Option 1**: copy this
```html
<script src="https://cdn.jsdelivr.net/gh/tc-tommo/ringmaster@main/webring.js"></script>
```
   - **Option 2**: Include [`webring.js`](https://github.com/tc-tommo/ringmaster/blob/main/webring.js) in your site sources

### 3. Add buttons to your site
Add 2 hyperlinks with IDs `webring-prev` and `webring-next`

### Full Example:
 ```html
<script src="https://cdn.jsdelivr.net/gh/tc-tommo/ringmaster@main/webring.js"></script>
<footer>
    <div class="webring">
        <button id="webring-prev">⏮</button>
        <button id="webring-next">⏭</button>
    </div>
</footer>    
 ```

## 3. Customisation
Document IDs must be `webring-prev` and `webring-next`, style as you wish

## ! Fix Problems
Problems are printed to the browser console.
- **Current Host Not Found:**  
  The script uses `window.location.hostname` (sans any leading `www.`). Ensure your Gist entries match the hostname as it appears in the browser.
- **No Sites Found:**  
  Check that your Gist file has valid, non-empty lines with the hostnames.
- **Console Errors:**  
  Any network or parsing errors will be printed to the browser console. Open the Developer Tools to view detailed error messages.



<h1 align="center">
    <a href="https://projectshare.comp-soc.com">⏮</a>    THANKS FOR VISITING    
    <a href="https://tommo.page">⏭</a></h1>
<h1 align="center">





