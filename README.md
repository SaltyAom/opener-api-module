# opener-api-module
An Opener API shorten function as module
  
### Usage:
OpenerAPI can be pull from 'opener-api' package module.
```
// With npm
npm install opener-api
  
// With yarn
yarn add opener-api
```
  
First import/require openerAPI
```
// With require
const OpenerAPI = require("opener-api");
  
// With import
import OpenerAPI from "opener-api"
```
  
- OpenerAPI contains a list of shorten list of function to use with [Opener Pro](https://github.com/aomkirby123/opener-pro).   
* getGenerate(id) - Return Promise of generated image which can be used with 'decrypt' based on input id.
* getRelate(id) - Return Promise of 5 related hentai based on input id.
* getData(id) - Return Promise of data including each page data based on input id.
* getTag(tag, page?) - Return Promise of 5 related hentai based on input id.
  
Return value from each function available at [api.opener.mystiar.com](https://api.opener.mystiar.com)
  
## Need Help?
We welcome all contributions by sending PR to this repository.
  
##### Create an Issue
If you have something you want to discuss in detail, or have hit an issue which you believe others will also have in deployment or development of the system, [opening an issue](https://github.com/aomkirby123/opener-pro/issues) is the best way to get help. It creates a permanent resource for others wishing to contribute to conversation.
