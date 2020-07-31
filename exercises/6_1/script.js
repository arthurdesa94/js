const states = ["SP", "MG", "RJ"];

function createState(){
    const selectState = document.querySelector('#state');
    for(let i = 0; i<states.length; i+=1){
        const createOption = document.createElement('option');
        createOption.innerHTML = states[i];
        createOption.setAttribute('value', states[i]);
        selectState.appendChild(createOption);
    }
}
return selectState;