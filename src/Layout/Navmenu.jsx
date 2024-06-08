const Navmenu = () => {
    const routes = [
      { Name:"All Product",
      path: "/Product",

      },
      {Name:"Single Product",
        path:"/SingleProduct",
      },
      {Name:"About",
        path:"/About",
      },
      {Name:"Contact",
        path:"/Contact",
      },
      
    ];
  
    return (
      <ul className="flex">
        {routes.map((route,index) => (
          <li className="mr-3" key={index}>
            <a className="text-gray-700 hover:text-green-500 uppercase p-2 font-medium" href={route.path}>
              {route.Name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Navmenu;
  