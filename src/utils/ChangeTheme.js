export const changeTheme = (theme) => {
    const root = document.querySelector(':root');

    let myVariables;

    if (theme === 'dark') {
        myVariables = {
            '--primary-color': '#223150',
            '--secondary-color': '#2F4B79',
            '--tertiary-color': '#4A668E',
            '--quaternary-color': '#C92337',
            '--quinary-color': '#D9A64A',
            '--senary-color': '#E16237'
        }
    } else {
        myVariables = {
            '--primary-color': '#D9A64A',
            '--secondary-color': '#E16237',
            '--tertiary-color': '#C92337',
            '--quaternary-color': '#4A668E',
            '--quinary-color': '#2F4B79',
            '--senary-color': '#223150'
        }
    }

    for (const key in myVariables) {
        root.style.setProperty(key, myVariables[key]);
    }
}