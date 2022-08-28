import NavButton from "./NavButton"

const Nav = () => {
    return (
        <div className='flexbox-container Nav'>


            <NavButton text='INTRO' />
            <NavButton text='EDUCATION' />
            <NavButton text='PROJECT' />
            <NavButton text='WORK' />
            <NavButton text='CONTACT' />


        </div>
    )
}

export default Nav;