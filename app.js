"use strict"

document.addEventListener("DOMContentLoaded", () => {

    let newValue = 0;
    const mainNum = document.getElementById("startValue");
    const incrementBtn = document.getElementById("increment");
    const decrimentBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");

    


    incrementBtn.addEventListener("click", () => {
        newValue ++;
        startValue.textContent = newValue
    });

    
    decrimentBtn.addEventListener("click", () => {
        newValue --;
        startValue.textContent = newValue
    });

    resetBtn.addEventListener("click", () => {
        newValue = 0
        startValue.textContent = newValue
    });

});