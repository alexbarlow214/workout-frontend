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
    cherryRed: {
        100: "#ebcccf",
        200: "#d699a0",
        300: "#c26670",
        400: "#ad3341",
        500: "#990011",
        600: "#7a000e",
        700: "#5c000a",
        800: "#3d0007",
        900: "#1f0003"
    },
    offWhite: {
        100: "#fefdfd",
        200: "#fefbfb",
        300: "#fdfaf9",
        400: "#fdf8f7",
        500: "#fcf6f5",
        600: "#cac5c4",
        700: "#979493",
        800: "#656262",
        900: "#323131"
    },

    ...(mode === 'dark'
    ?{
        red: {
            100: "#ebcccf",
            200: "#d699a0",
            300: "#c26670",
            400: "#ad3341",
            500: "#990011",
            600: "#7a000e",
            700: "#5c000a",
            800: "#3d0007",
            900: "#1f0003"
        },
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
            500: "#ad3341",
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
            100: "#18212e",
            200: "#31425c",
            300: "#496389",
            400: "#6284b7",
            500: "#7aa5e5",
            600: "#95b7ea",
            700: "#afc9ef",
            800: "#cadbf5",
            900: "#e4edfae"
            
        },
        red: {
            100: "#1f0003",
            200: "#3d0007",
            300: "#5c000a",
            400: "#7a000e",
            500: "#990011",
            600: "#ad3341",
            700: "#c26670",
            800: "#d699a0",
            900: "#ebcccf"
        },
        primary: {
            100: "#fefdfd",
        200: "#fefbfb",
        300: "#fdfaf9",
        400: "#fdf8f7",
        500: "#fcf6f5",
        600: "#dfdcdc",
        700: "#979493",
        800: "#656262",
        900: "#323131"
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
            500: "#990011FF",
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
                    main: colors.cherryRed[500]
                },
                secondary: {
                    main: colors.greenAccent[500]
                },
                neutral: {
                    dark: colors.offWhite[700],
                    main: colors.offWhite[500],
                    light: colors.offWhite[300]
                },
                background: {
                    default: colors.primary[500]
                }
            } : {
                primary: {
                    main: colors.cherryRed[500]
                },
                secondary: {
                    main: colors.greenAccent[500]
                },
                neutral: {
                    dark: colors.offWhite[700],
                    main: colors.offWhite[500],
                    light: colors.offWhite[300]
                },
                background: {      
                    default: colors.offWhite[500]
                }
            }
        },
        typography : {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 20,
            // allVariants: {
            //     color: "#FCF6F5FF"
            //   },
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


// black: {
//     100: "#ebcccf",
//     200: "#d699a0",
//     300: "#c26670",
//     400: "#ad3341",
//     500: "#990011",
//     600: "#7a000e",
//     700: "#5c000a",
//     800: "#3d0007",
//     900: "#1f0003"
// },