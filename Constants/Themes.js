import Colors from "./Colors";

export default Themes = {
  lightTheme: {
    dark: false,
    colors: {
      primary: Colors.cederChest,
      secondary: Colors.midnightGreen,
      background: Colors.light,
      text: Colors.dark,
    }
  },

  darkTheme: {
    dark: true,
    colors: {
      primary: Colors.cederChest,
      secondary: Colors.cadetBlue,
      background: Colors.dark,
      text: Colors.light,
    }
  }
}