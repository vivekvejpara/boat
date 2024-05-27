import React from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import BoatLogo from "../Asset/Boat-logo.png";
import { useNavigate } from "react-router-dom";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Categories", href: "/categories", current: false },
  {
    name: "boAT Personalisation",
    href: "/productPersonalization",
    current: false,
  },
  { name: "Gift With boAT", href: "/giftWithBoat", current: false },
  { name: "Corporate Order", href: "/corporateOrders", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ cartItemCount }) {
  const Navigate = useNavigate();
  return (
    <Disclosure as="nav" className=" main_nav bg-gray-800">
      {({ open }) => (
        <>
          <div className="main_nav mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                <div
                  onClick={() => {
                    Navigate(`/`);
                  }}
                  className="flex flex-shrink-0 items-center"
                >
                  <img
                    className="h-8 w-auto"
                    src={BoatLogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute   right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400  "
                >
                  <span className="absolute  " />
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu
                  as="div"
                  className="relative ml-3"
                  onClick={() => {
                    Navigate(`/AddToCart`);
                  }}
                >
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <i className="fa-solid fa-cart-shopping text-lg text-white"></i>
                      <div className="absolute px-1 rounded-full bg-white text-black left-5 bottom-5 font-bold text-xs">
                        {cartItemCount}
                      </div>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 px-2 pb-3 pt-2 absolute w-full bg-gray-900 z-10">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
