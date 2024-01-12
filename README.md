
# FakeUserAPI   
    Fakeuserapi will helps you in your developement  for testing and other purposes

#### Usage

⭐ **Get All Users**
```js
// try -> https://fakeuserapi.vercel.app/api/allUsers
async function getUsers(){
    let response = await fetch("http://localhost:300/api/allUsers")
    let serverData = await response.json()
    /**
     * console.log(serverData.message)
     * console.log(serverData.users)
     * 
    */
   return serverData
}
``` 


⭐ **Post User**
```js
// try -> https://fakeuserapi.vercel.app/api/postUser
async function getUsers(){
    let response = await fetch("http://localhost:300/api/postUser",
    {
        method:"POST",
        body:JSON.stringify({
            "email":"afriayan01@gmail.com",
            "id":"user0",
            "name":"shaik afrid
        })
    }
    )

    let serverData = await response.json()
    /**
     * console.log(serverData.message)
     * 
    */
   return serverData
   
```
⭐ **Get One User**

```js
// try -> https://fakeuserapi.vercel.app/api/getUser
    async function getUsers(){
    let response = await fetch("http://localhost:300/api/getUser",
    {
        method:"POST",
        body:JSON.stringify({
            "email":"afriayan01@gmail.com"
        })
    }
    )

    let serverData = await response.json()
    /**
     * console.log(serverData.message)
     * console.log(serverData.data)
     * 
    */
   return serverData

```
⭐ **Json Format**

```json
{
    "name":"Shaik Afrid",
    "email":"afridayan01@gmail.com",
    "id":"user0",
    "image":"https://avatars.githubusercontent.com/u/138677681?s=96&v=4",
    "loggedIn":true,
    "phNo":1234567890
    
}

``` 

#### Authors

- [AFRID SHAIK](https://www.github.com/afriddev)

