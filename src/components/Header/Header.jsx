import style from './Header.module.css'
import logo from '/todo-logo.svg'
const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.headerBody}>
                    <img src={logo} className={style.headerLogo} alt=""/>
                </div>
            </div>
        </header>
    );
};

export default Header;