import { ScrollArea } from "components/ui/scroll-area"
import React from "react"
import { Outlet } from "react-router-dom"
import classNames from "classnames"
const AuthWrapper = ({ className }: { className: string }) => {
  return (
    <>
      <ScrollArea className={classNames(className, "h-full w-full")}>
        <Outlet />
      </ScrollArea>
    </>
  )
}

export default AuthWrapper
