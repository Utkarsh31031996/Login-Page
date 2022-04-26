  /**Here 3 things are required 
   * 1-login-form
   * 2-button
   * 3-Error Message
  */

const loginform=document.getElementById('login-form');      
const loginBtn=document.getElementById('btn');
const loginError=document.getElementById('error-message');

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    /**
     * username ke value janne ke lye hum yaha .value ka use kar rahe hai
     */
    const username=loginform.username.value;
    const password=loginform.password.value;
    console.log('hello')

    if(username==='user' && password==='123'){
        alert('You are sucessfully loggin in')
        location.reload();
    }else{
        loginError.style.opacity=1;
    }

})