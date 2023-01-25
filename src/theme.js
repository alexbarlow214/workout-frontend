import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// var a = {


//     black: {
//         100: "#d1d3d7",
//         200: "#a3a6af",
//         300: "#757a87",
//         400: "#474d5f",
//         500: "#192137",
//         600: "#141a2c",
//         700: "#0f1421",
//         800: "#0a0d16",
//         900: "#05070b"
// },

// //     #001D3D
// //     black: {
// //         100: "#d0d2d8",
// //         200: "#a0a4b1",
// //         300: "#71778b",
// //         400: "#414964",
// //         500: "#121c3d",
// //         600: "#0e1631",
// //         700: "#0b1125",
// //         800: "#070b18",
// //         900: "#04060c"
// // },
//     black: {
//         100: "#d0d1d5",
//         200: "#a1a4ab",
//         300: "#727681",
//         400: "#434957",
//         500: "#141b2d",
//         600: "#101624",
//         700: "#0c101b",
//         800: "#080b12",
//         900: "#040509"
// },
// yellow: {
//     100: "#fff7ce",
//     200: "#ffef9d",
//     300: "#ffe66c",
//     400: "#ffde3b",
//     500: "#ffd60a",
//     600: "#ccab08",
//     700: "#998006",
//     800: "#665604",
//     900: "#332b02"
// },

// gold: {
//     100: "#fff3cc",
//     200: "#ffe799",
//     300: "#ffdb66",
//     400: "#ffcf33",
//     500: "#ffc300",
//     600: "#cc9c00",
//     700: "#997500",
//     800: "#664e00",
//     900: "#332700"
// },

// blue: {
//     100: "#ccd7e0",
//     200: "#99aec2",
//     300: "#6686a3",
//     400: "#335d85",
//     500: "#003566",
//     600: "#002a52",
//     700: "#00203d",
//     800: "#001529",
//     900: "#000b14"
// },

// navy: {
//     100: "#ccd2d8",
//     200: "#99a5b1",
//     300: "#66778b",
//     400: "#334a64",
//     500: "#001d3d",
//     600: "#001731",
//     700: "#001125",
//     800: "#000c18",
//     900: "#00060c"
// },

// black: {
//     100: "#ccced0",
//     200: "#999ca1",
//     300: "#666b72",
//     400: "#333943",
//     500: "#000814",
//     600: "#000610",
//     700: "#00050c",
//     800: "#000308",
//     900: "#000204"
// },
// }

export const tokens = (mode) => ({
    ...(mode === 'dark'
    ?{
        grey: {
            100: "#e4edfa",
            200: "#cadbf5",
            300: "#afc9ef",
            400: "#95b7ea",
            500: "#7aa5e5",
            600: "#6284b7",
            700: "#496389",
            800: "#31425c",
            900: "#18212e"
           
        },
        
        primary: {
            100: "#d1d3d7",
            200: "#a3a6af",
            300: "#757a87",
            400: "#474d5f",
            500: "#192137",
            600: "#141a2c",
            700: "#0f1421",
            800: "#0a0d16",
            900: "#05070b"
        },
        yellow: {
            100: "#fff7ce",
            200: "#ffef9d",
            300: "#ffe66c",
            400: "#ffde3b",
            500: "#ffd60a",
            600: "#ccab08",
            700: "#998006",
            800: "#665604",
            900: "#332b02"
        },
        gold: {
            100: "#fff3cc",
            200: "#ffe799",
            300: "#ffdb66",
            400: "#ffcf33",
            500: "#ffc300",
            600: "#cc9c00",
            700: "#997500",
            800: "#664e00",
            900: "#332700"
        },
        greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922"
        },
        
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        
        blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632"
        }
    } : {
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },
        
        primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0",
            500: "#141b2d",
            600: "#434957",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
        },
        yellow: {
            100: "#fff7ce",
            200: "#ffef9d",
            300: "#ffe66c",
            400: "#ffde3b",
            500: "#ffd60a",
            600: "#ccab08",
            700: "#998006",
            800: "#665604",
            900: "#332b02"
        },
        gold: {
            100: "#fff3cc",
            200: "#ffe799",
            300: "#ffdb66",
            400: "#ffcf33",
            500: "#ffc300",
            600: "#cc9c00",
            700: "#997500",
            800: "#664e00",
            900: "#332700"
        },
        greenAccent: {
            100: "#0f2922",
            200: "#1e5245",
            300: "#2e7c67",
            400: "#3da58a",
            500: "#4cceac",
            600: "#70d8bd",
            700: "#94e2cd",
            800: "#b7ebde",
            900: "#dbf5ee"
        },
        
        redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb"
        },
        
        blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe"
        }
    }
    )
})
//color design tokens

// mui thene settings
export const themeSettings = (mode) => {
    const colors = tokens(mode)

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark')?
            {
                primary: {
                    main: colors.primary[500]
                },
                secondary: {
                    main: colors.greenAccent[500]
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: colors.primary[500]
                }
            } : {
                primary: {
                    main: colors.primary[100]
                },
                secondary: {
                    main: colors.greenAccent[500]
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {      
                    default: "#fcfcfc",
                }
            }
        },
        typography : {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14
            }
        }
       
    }
}

// context for colour mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
})

export const useMode = () => {
    const [mode, setMode] = useState("dark")

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
            setMode((prev) => (prev === "light" ? "dark" : "light"))
        }), []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}
