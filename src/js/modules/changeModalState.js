import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelector('#width'),
        windowHeight = document.querySelector('#width'),
        windowType = document.querySelector('#view_type'),
        windowProfile = document.querySelector('.checkbox')
        
    windowForm.forEach((item, i) => {
        item.addEventListener('click',() => {
            state.form = i;
            console.log(state);
        })
    })

    checkNumInputs('#heigth')
    checkNumInputs('#width')

};

export default changeModalState;