import { Moon, Sun, Sunrise, Sunset } from "react-feather"
import { ThemeContext, Themes } from "../contexts/ThemeContext"
import { useContext } from "react"

const themes = [
    {
        theme: Themes.MORNING,
        icon: <Sunrise />
    },
    {
        theme: Themes.LIGHT,
        icon: <Sun />
    },
    {
        theme: Themes.EVENING,
        icon: <Sunset />
    },
    {
        theme: Themes.DARK,
        icon: <Moon />
    },
]

function Toggle() {
    const {setTheme, theme} = useContext(ThemeContext);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    }

  return (
    <div className="toggle">
        {themes.map((themeVal) => (
            <div className={`theme ${theme == themeVal.theme && "activeTheme"}`} key={themeVal.theme} onClick={() => handleThemeChange(themeVal.theme)}>
                {themeVal.icon}
            </div>
        ))}
    </div>
  )
}

export default Toggle