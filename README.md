##HOW TO INSTALL
npm i bug-jsonv

##HOW TO USE
<!--This will require the npm package into the file you want to use-->
var validator = require('bug-jsonv')

##Method that the group game will use 
<!-- JSONDATA will be the JSON object you want to give with this class (FOR GROUP GAME)-->
var jsonv = new validator(JSONDATA)

if(jsonv.checkValidclientdata()){ <!--This will return a true or false-->
    <!--IF CORRECTLY VALIDATED, DO SOMETIHNG-->
} 

##CONTACT 
<!-- If you need any help, contact me at jelle.debuyzere@student.vives.be
-->