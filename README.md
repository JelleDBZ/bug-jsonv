##HOW TO INSTALL
npm i bug-jsonv

##HOW TO USE
<!--This will require the npm package into the file you want to use-->
```Javascript
var validator = require('bug-jsonv')
```

##Method that the group bug-game will use 
<!-- JSONDATA will be the JSON object you want to give with this class (FOR GROUP GAME)-->
```Javascript
var jsonv = new validator(JSONDATA) //JSONDATA will the object you get from the API

if(jsonv.checkValidclientdata())
{ 
    //if the object is correct and validated, do something
} 

```

##CONTACT 
If you need any help, contact me at jelle.debuyzere@student.vives.be
