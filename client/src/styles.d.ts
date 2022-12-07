import 'styled-components';
import theme from "your_theme_path";

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }
}