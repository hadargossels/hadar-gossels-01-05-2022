import { TextField, withStyles } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export const StyledBoxAutoComplete = withStyles((theme) => ({
    popupIndicatorOpen: {
        
    },
    root: {
        '& .MuiAutocomplete-popupIndicatorOpen': {
            transform: 'rotate(0deg)',
        },
        '& .MuiIconButton-root': {
            color: theme.palette.primary.text
        },
        '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
            padding: '0px 4px'
        },
        '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
            padding: '7.5px 9px',


        },

        '& .MuiFormControl-root ': {
            '& .MuiInput-underline:before': {
                // Semi-transparent underline
                // borderBottomcolor: theme.palette.primary.text,
            },

            '& .MuiInput-underline:hover:before': {
                // Solid underline on hover
                // borderBottomcolor: theme.palette.primary.text,
            },
            '& .MuiInput-underline:after': {
                // Solid underline on focus
                borderBottom: `1px solid ${theme.palette.primary.main}`, // on step 1
            },
            '& .MuiInputBase-input': {
                // Text color
                color: 'inherit',
            },
            '& .MuiInputBase-root.Mui-error': {
                // Text color
                color: theme.palette.primary.text,
            },
            '& .MuiAutocomplete-endAdornment': {
                // right: -6,
                // padding: '3px 6px',
            },
            '& .MuiAutocomplete-popupIndicator': {
                // in TabContent.js we dont want the margin
                marginBottom: (props) => (props.rotatePopupIcon ? 0 : 5),
                marginTop: (props) => (props.rotatePopupIcon ? 5 : 0),
            },
        },
        // '& label + .MuiInput-formControl': {
        //     marginTop: 0,
        // },
        '& .MuiInputLabel-formControl': {
            transform: 'translate(8px, 9px) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(0, -15px) scale(0.75)',
            },
        },
        '& .MuiInputLabel-root.Mui-error': {
            color: theme.palette.primary.text,
        },
    },
    inputRoot: {
        '& .MuiAutocomplete-endAdornment': {
            top: 'calc(50% - 14px)',
        },
        '& .MuiInputLabel-formControl': {
            transform: 'translate(0, 8px) scale(1)',
        },
        '& .MuiAutocomplete-input': {
            minWidth: 0,
            // maxWidth: 140,
            padding: 0,
        },
        '&.MuiOutlinedInput-root ': {
            borderRadius: 4,
            // height: '45px',
        }, // not on step 1
        '&.MuiIconButton-root': {
            color: '#212529',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            bordercolor: theme.palette.primary.text,
            borderWidth: 1
            // borderRadius: 4
        },
        color: theme.palette.primary.text,
        fontWeight: 300,
        fontSize: 16,
        backgroundColor: 'inherit',
        // '& input::placeholder': {
        //   color: theme.palette.primary.text,
        //   fontSize: props => props.placeholderSize === '4' ? theme?.typography?.sizes?.size4 : theme?.typography?.sizes?.size5,
        //   opacity: 1,
        // },
        // '& .MuiOutlinedInput-notchedOutline': {
        //     border: 'none',
        // },
        // '&:hover .MuiOutlinedInput-notchedOutline': {
        //     border: 'none',
        // },
        // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        //     border: 'none',
        // },
    },
    paper: {
        '&.MuiAutocomplete-paper': {
            // backgroundColor: theme.palette.background.input,
            backgroundcolor: theme.palette.primary.text,
            margin: 0,
            borderRadius: 5,
            padding: 0,
            width: '100%',
        },
        '& .MuiAutocomplete-noOptions': {
            color: '#B6B6B6',
            fontSize: 14,
        },
    },
    listbox: {
        '&.MuiAutocomplete-listbox': {
            '&::-webkit-scrollbar': {
                width: '3px',
                height: '3px',
            },
            '&::-webkit-scrollbar-track': {
                // boxShadow: 'inset 0 0 5px grey',
                backgroundcolor: theme.palette.primary.text,
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundcolor: theme.palette.primary.text,
                borderRadius: '10px',
            },
        },
    },
    popupIndicator: {
        '&.MuiAutocomplete-popupIndicator': {
            '&.MuiIconButton-root.Mui-disabled': {
                color: '#B6B6B6',
                '& .MuiIconButton-label': {
                    '& path': {
                        fill: theme.palette.primary.main,
                    },
                },
            },
        },
    },
    option: {
        '&.MuiAutocomplete-option': {
            fontSize: theme?.typography?.sizes?.size4,
            '&:hover': {
                backgroundColor: theme.palette.primary.header,
            },
            '&[aria-selected="true"]': {
                // color: theme.palette.text.main
                color: (props) => props.type !== 'multiple' && theme.palette.primary.main,
                backgroundcolor: theme.palette.primary.text,
                '&:hover': {
                    backgroundColor: theme.palette.primary.header,
                },
            },
            '&[aria-selected="false"]': {
                color: theme.palette.primary.text,
            },
        },
    },
    clearIndicator: {
        '&.MuiAutocomplete-clearIndicator': {
            color: '#B6B6B6',
            '& .MuiSvgIcon-fontSizeSmall': {
                width: '1em',
            },
        },
    },
}))(Autocomplete)

export const CustomBoxTextField = withStyles((theme) => ({
    root: {
        '& ::-webkit-input-placeholder': {
            fontWeight: 400,
        },
        '&.CUSTOM_PLACEHOLDER': {
            '& ::-webkit-input-placeholder': {
                fontWeight: 400,
                color: theme.palette.primary.text,
                opacity: 1,
            },
        },
        '& .MuiInputBase-root': {
            color: (props) => (props.enhanced ? theme.palette.primary.main : theme.palette.text.subtitle),
            fontWeight: (props) => props.enhanced && 500,
            // height: props => props.styling.height ?? 34,

            // fontSize: (props) => props.styling.fontSize
        },
        '& .MuiInputBase-root.Mui-disabled': {
            color: `${theme.palette.primary.main} !important`,
        },
        '& .MuiInputBase-root.Mui-error': {
            color: `${theme.palette.primary.main} !important`,
        },
        '& .MuiInputBase-inputMarginDense': {
            padding: '6px 0 4.5px',
        },
        '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input': {
            padding: '6px 0 4px',
        },
        '& .MuiFormLabel-root': {
            color: theme.palette.primary.text,
            fontSize: 16
        },
        '& .MuiFormLabel-root.Mui-error': {
            color: theme.palette.primary.text,
        },
        '& .MuiInputBase-fullWidth': {
            width: (props) => (props.width ? props.width : '100%'),
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.background.container,
            borderRadius: 4,
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: (props) => (props.disabled ? '#00000042' : props?.styling?.borderColor),
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: (props) => (props?.styling?.borderColor),
            '& > *': {
                maxWidth: '0px'

            }
        },
        '& .MuiOutlinedInput-inputMarginDense': {
            padding: '7.5px 8px',
        },
        '& .MuiOutlinedInput-adornedEnd': {
            paddingRight: 0,
        },
        '& .MuiInputBase-input': {
            fontSize: (props) => (props?.styling?.fontSize),
            fontWeight: 400,
        },
        '& .MuiFormHelperText-root.Mui-error': {
            whiteSpace: 'nowrap',
            color: 'red',
        },
        '& .MuiInputLabel-formControl': {
            transform: 'translate(8px, 9px) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(0, -15px) scale(0.75)',
            },
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.primary.main} !important`,
            borderWidth: 1
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: theme.palette.primary.text
        },
        '& .MuiInputAdornment-positionEnd': {
            margin: '0px 8px'
        },
        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: (props) => (props?.styling?.rangePicker && props?.styling?.borderColor)
        }
    },
}))(TextField)
