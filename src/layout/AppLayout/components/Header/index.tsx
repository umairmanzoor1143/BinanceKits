import { Button } from "components/ui/button"
import { ModeToggle } from "components/ToggleButton"
import { useToast } from "hooks/useToaster"

const Header = () => {
  const { toast } = useToast()
  return (
    <div className="w-full flex justify-between items-center gap-2 p-2">
      <div className="navigation-bar flex justify-between items-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7200 1024"
          className="header-logo"
          fill={"currentColor"}
          width={180}
        >
          <path d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667" />
          <text
            x="1250"
            y="800"
            fontFamily="Binance PLEX"
            fontWeight={"900"}
            fontSize="850"
            fill={"currentColor"}
          >
            BINANCEKITS
          </text>
        </svg>
        <div className="flex gap-2">
          <Button
            variant={"link"}
            onClick={() => {
              console.log("tost")
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
                duration: 5000,
              })
            }}
          >
            Blog
          </Button>
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
      <ModeToggle />
    </div>
  )
}

export default Header
