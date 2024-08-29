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
        <Link href={"/"}>
          <MenuItem
            setActive={setActive} active={active} item="Our Services"
          >
            <HoveredLink href="/web-dev">Pre- wedding</HoveredLink>
            <HoveredLink href="/interface-design">Wedding</HoveredLink>
            <HoveredLink href="/interface-design">Newborn, Kids, Maternity</HoveredLink>
            <HoveredLink href="/seo">Indoor & Outdoor</HoveredLink>
            <HoveredLink href="/branding">Naming Ceremonies</HoveredLink>
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