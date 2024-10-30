import profile from "../../images/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center mx-2 p-4 border-b-2 max-w-7xl mx-auto">
            <h1 className='text-3xl '>knowledge valley</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;