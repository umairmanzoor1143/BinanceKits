import React, { useEffect, useState } from "react"
import { RcMail } from "./components/mail"
import { accounts, mails } from "./data"
import Cookies from "js-cookie"

export default function MailPage() {
  const [defaultLayout, setDefaultLayout] = useState(undefined)
  const [defaultCollapsed, setDefaultCollapsed] = useState(undefined)

  useEffect(() => {
    const layout = Cookies.get("react-resizable-panels:layout")
    const collapsed = Cookies.get("react-resizable-panels:collapsed")

    if (layout) {
      setDefaultLayout(JSON.parse(layout))
    }

    if (collapsed) {
      setDefaultCollapsed(JSON.parse(collapsed))
    }
  }, [])
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <img
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <RcMail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
