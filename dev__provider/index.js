import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { ResetCSS } from "./atoms";
const DevProvider = ({ children }) => {
    return (_jsxs(ThemeProvider, Object.assign({ theme: defaultTheme() }, { children: [_jsx(ResetCSS, {}), children] })));
};
export default DevProvider;
