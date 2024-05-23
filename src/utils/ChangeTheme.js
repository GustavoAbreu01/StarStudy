export const changeTheme = (theme) => {
    const root = document.querySelector(':root');

    let myVariables;

    if (theme === 'light') {
        myVariables = {
            '--primary-color': '#D9A64A',
            '--secondary-color': '#E16237',
            '--tertiary-color': '#C92337',
            '--quaternary-color': '#4A668E',
            '--quinary-color': '#2F4B79',
            '--senary-color': '#223150',
            '--base-color1': '#eeeeee',
            '--base-color2': '#ffffff',
            '--base-color3': '#095e80',
            '--button-theme1': '#589afd',
            '--button-theme2': '#065dd8',
            '--white': '#fff',
            '--black': '#000'
        }
    } else {
        myVariables = {
            '--primary-color': '#223150',
            '--secondary-color': '#2F4B79',
            '--tertiary-color': '#4A668E',
            '--quaternary-color': '#C92337',
            '--quinary-color': '#D9A64A',
            '--senary-color': '#E16237',
            '--base-color1': '#1F1F1F',
            '--base-color2': '#1A1A1A',
            '--base-color3': '#9e6f53',
            '--button-theme1': '#fd5858',
            '--button-theme2': '#fa2c2c',
            '--white': '#000',
            '--black': '#fff'
        }
    }

    for (const key in myVariables) {
        root.style.setProperty(key, myVariables[key]);
    }
}