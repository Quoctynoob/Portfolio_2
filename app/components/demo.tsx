import React from 'react';
import { MenuItem, MenuContainer } from "@/components/ui/fluid-menu"
import { Menu as MenuIcon, X, Home, Mail, User, Settings, AppWindow, BriefcaseBusiness } from "lucide-react"

// A fluid circular menu that elegantly expands to reveal navigation items with smooth icon transitions
interface MenuDemoProps {
  onTabSelect: (tabName: string) => void;
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
            onClick={() => {
                onTabSelect('about')
                 // Close the menu when selecting a tab
            }}
          />
          <MenuItem 
            icon={<AppWindow size={22} strokeWidth={1.5} />} 
            onClick={() => {
                onTabSelect('projects')
                 // Close the menu when selecting a tab
            }}
          />
          <MenuItem 
            icon={<BriefcaseBusiness size={22} strokeWidth={1.5} />} 
            onClick={() => {
                onTabSelect('work') // Close the menu when selecting a tab
            }}
          />
        </MenuContainer>
      </div>
    </div>
  );
}
