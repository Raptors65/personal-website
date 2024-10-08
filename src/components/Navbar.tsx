import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { colorSchemes, navigation } from "../utils/page-info";
import { useEffect, useState } from "react";

type Props = {
  pathname: string;
};

export default function Navbar({ pathname }: Props) {
  return (
    <Disclosure
      as="nav"
      className={clsx(
        "text-inherit sticky top-0 z-10 border-b-gray-700 border-b sm:border-b-0",
        colorSchemes[pathname],
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <a href="/" className="text-lg">
                Lucas Kim
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={clsx(
                      pathname === item.href ? "underline" : "hover:underline",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={clsx(
                pathname === item.href ? "underline" : "hover:underline",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
