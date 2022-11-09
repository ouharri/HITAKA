

const tswira = document.querySelector('#img_amim')
const styleTswira = tswira.style

if ( window.scrollY <= 0 ) again() 

function again() {
setTimeout(() => {

    styleTswira.width= "98%"

    setTimeout(() => {

        styleTswira.width= "100%"

        setTimeout(() => {

            styleTswira.width= "95%"

            setTimeout(() => {

                styleTswira.width= "98%"

                setTimeout(() => {

                    styleTswira.width= "95%"

                    setTimeout(() => {

                        styleTswira.width= "90%"

                        setTimeout(() => {

                            styleTswira.width= "95%"

                            setTimeout(() => {

                                styleTswira.width= "100%"
                                
                                if ( window.scrollY <= 0 ) again() 

                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);
            
            }, 1000);
            
        }, 1000);

    }, 1000);

}, 1000);
}

// setTimeout(() => {

//     styleTswira.width= "80%"

// }, 3000);

// setTimeout(() => {

//     styleTswira.width= "70%"

// }, 3000);

// setTimeout(() => {
//     styleTswira.width= "60%"
// }, 3000);