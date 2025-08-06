const Navbar = () => {
    return(
        <nav className="w-full px-8 py-4 flex justify-between items-center shadow-md">
            <div className="text-2xl font-bold text-blue-600">Mylanding Page</div>
            <ul className="flex space-x-6 text-gray-700 text-sm font-medium">
                <li><a className="hover:text-blue-500" href="#">Docs</a></li>
                <li><a className="hover:text-blue-500" href ="#">Pricing</a></li>
                <li><a className="hover:text-blue-500" href ="#">GitHub</a></li>
            </ul>
        </nav>
    );
}
export default Navbar