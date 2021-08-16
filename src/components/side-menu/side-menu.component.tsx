import { ReactNode } from "react";

type SideMenuProps = {
  children: ReactNode
}
//TODO: Add styles.tsx
//TODO: Update bootstrap and use offcanvas component
const SideMenu = ({ children }: SideMenuProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default SideMenu;