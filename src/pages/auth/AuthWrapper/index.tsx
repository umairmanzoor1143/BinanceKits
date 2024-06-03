import { ScrollArea } from "components/ui/scroll-area"
import React from "react"
import { Outlet } from "react-router-dom"
const AuthWrapper = () => {
  return (
    <>
      <ScrollArea className="authpage-scroll min-h-full max-w-full">
        <Outlet />
      </ScrollArea>
    </>
  )
}

export default AuthWrapper
