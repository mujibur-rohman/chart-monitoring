import logo from "./../assets/logo.png";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="bg-primary p-3 px-8 rounded-full flex justify-between items-center sticky">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="w-20" />
        <div className="text-xl">
          <h3 className="text-blue-300">Sistem Monitoring</h3>
          <h3 className="text-white">Kementrian Pertahanan</h3>
        </div>
      </div>
      <div className="flex items-center gap-6 dropdown dropdown-bottom">
        <BellIcon className="h-6 w-6 text-neutral" />
        <div
          className="bg-secondary px-8 py-2 cursor-pointer rounded-full flex items-center gap-10 shadow-xl btn border-none capitalize"
          tabIndex={0}
        >
          <div>
            <p className="text-blue-300">Falah Inovasi</p>
            <p className="text-neutral text-sm">Super Admin</p>
          </div>
          <ChevronDownIcon className="w-5 h-5 text-neutral" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu shadow bg-base-100 rounded-box w-52 cursor-pointer mt-4"
        >
          <li className="py-3 hover:bg-neutral p-3">Profile</li>
          <li className="py-3 hover:bg-neutral p-3">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
