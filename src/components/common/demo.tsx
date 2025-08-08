import React from 'react';
import { MenuItem, MenuContainer } from "../ui/fluid-menu"
import { Menu as MenuIcon, X, User, AppWindow, BriefcaseBusiness } from "lucide-react"
import type { TabName } from "@/src/contexts/NavigationContext";

// A fluid circular menu that elegantly expands to reveal navigation items with smooth icon transitions
interface MenuDemoProps {
  onTabSelect: (tabName: TabName) => void;
}

export function MenuDemo({ onTabSelect }: MenuDemoProps) {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b bg-lightGreen blur-3xl -z-10 rounded-full" />
        <MenuContainer>
          <MenuItem
            icon={
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                  <MenuIcon size={22} strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                  <X size={24} strokeWidth={1.5} />
                </div>
              </div>
            }
          />
    
          <MenuItem 
            icon={<User size={22} strokeWidth={1.5} />} 
            onClick={() => onTabSelect('about')}
          />
          <MenuItem 
            icon={<AppWindow size={22} strokeWidth={1.5} />} 
            onClick={() => onTabSelect('projects')}
          />
          <MenuItem 
            icon={<BriefcaseBusiness size={22} strokeWidth={1.5} />} 
            onClick={() => onTabSelect('work')}
          />
        </MenuContainer>
      </div>
    </div>
  );
}
