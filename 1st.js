let uref = document.getElementById("username");
let pref= document.getElementById("password");
let sref= document.getElementById("submit");
let mref= document.getElementById("message-ref");
let isUsernameValid=() => {
    const utest=/^[a-zA-Z][a-zA-Z0-9]{3,32}/;
    return utest.test(uref);
}
let ispassvalid = () => {
    const ptest=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return ptest.test(pref);
}
uref.addEventListener("input", () =>{
    if(!isUsernameValid()){
        mref.style.visibility="hidden";
        uref.style.cssText="border-color:#fe2e2e; backgound-color:#ffc2c2";
    }
    else{
        uref.style.cssText="border-color:#34bd34; backgound-color:#c2ffc2";
    }
});
pref.addEventListener("input", () =>{
    if(!ispassvalid()){
        mref.style.visibility="hidden";
        pref.style.cssText="border-color:#fe2e2e; backgound-color:#ffc2c2";
    }
    else{
        pref.style.cssText="border-color:#34bd34; backgound-color:#c2ffc2";
    }
});
sref.addEventListener("mouseover", () =>{
    if(!isUsernameValid() || !ispassvalid()){
        let containerreact=document.querySelector(".container").getBoundingClientRect();
        let sreact=sref.getBoundingClientRect();
        let off=sreact.left . containerreact.left;
        console.log(off);

    }
});
sref.addEventListener("click", () =>{
    mref.style.visibility="visible";
});