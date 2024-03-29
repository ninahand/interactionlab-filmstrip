let toggles = document.querySelectorAll('.toggle')
let gridItems = document.querySelectorAll('.grid-item')


toggles.forEach((toggle, index)=>{
    let toggleType = toggle.dataset.type
    toggle.addEventListener('click', (e)=> {
        toggles.forEach(toggle => {
            toggle.classList.remove('active');
        });
        toggle.classList.add('active');
        gridItems.forEach((item, index)=>{
            if (item.dataset.type ==toggleType){
                item.classList.remove('hidden')
            } else{
                item.classList.add('hidden');
            }
        })
    })
})
