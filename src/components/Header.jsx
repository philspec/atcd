import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate() 
  const handleClick = () =>{
    navigate("/")
  }
  return (
    <div className="flex flex-row justify-around items-center p-2 max-w-screen">
        <div className="w-1/9" onClick={handleClick}>
            <img src="/logo.svg" alt="Logo" className="mt-4 w-32 h-20" />
            <span className="text-lg font-semibold">Go Business</span>
        </div>
        <nav className="flex flex-row justify-center space-x-8 w-3/5 font-semibold text-md">
            <NavLink to="/home" className={({ isActive }) => isActive ? 'text-[#706FE5]' : 'text-[#1E1F4B]'} end>Home</NavLink>
            <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'text-[#706FE5]' : 'text-[#1E1F4B]'} end>About Us</NavLink>
            <NavLink to="/courses" className={({ isActive }) => isActive ? 'text-[#706FE5]' : 'text-[#1E1F4B]'} end>Courses</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-[#706FE5]' : 'text-[#1E1F4B]'} end >Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#706FE5]' : 'text-[#1E1F4B]'} end>Contact</NavLink>
        </nav>
        <button className="p-0 h-12 text-md border rounded-xl font-semibold bg-[#706FE5] w-1/9" onClick={handleClick}>Try for free</button>
    </div>
  );
}
