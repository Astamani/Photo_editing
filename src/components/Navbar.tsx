'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">

          </MenuItem>
        </Link>
        <Link href={"/courses"}>
          <MenuItem
            setActive={setActive} active={active} item="Our Photos"
          >
          </MenuItem>
        </Link>
        <Link href={"/photoservices"}>
          <MenuItem
            setActive={setActive} active={active} item="Our Services"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/photoservices">Pre- wedding</HoveredLink>
              <HoveredLink href="/photoservices">Wedding</HoveredLink>
              <HoveredLink href="/photoservices">Newborn, Kids, Maternity</HoveredLink>
              <HoveredLink href="/photoservices">Indoor & Outdoor</HoveredLink>
              <HoveredLink href="/photoservices">Naming Ceremonies</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        {/* <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">

          </MenuItem>
        </Link> */}
      </Menu>
    </div>
  )
}

export default Navbar