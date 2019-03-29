##How to install
npm i bug-jsonv

##How to use
<!--This will require the npm package into the file you want to use-->
```Javascript
var validator = require('bug-jsonv')
```

##Method that the group bug-game will use 
<!-- JSONdatawill be the JSON object you want to give with this class (FOR GROUP GAME)-->
####The message comes from the mqtt channel on which you subscribed
```Javascript
var JSONdata = JSON.parse(message.toString()); 
var jsonv = new validator(JSONdata); //JSONdata will the object you get from the API

if(jsonv.checkValidclientdata())
{ 
    //if the object is correct and validated, do something
} 

```

##CONTACT 
If you need any help, contact me at jelle.debuyzere@student.vives.be
https://www.npmjs.com/package/bug-jsonv
