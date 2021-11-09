export const IS_EMPTY_CHANGE = "IS_EMPTY_CHANGE";
export const UPDATE_MAIL = "UPDATE_MAIL";
export const UPDATE_PASS = "UPDATE_PASS";
export const REVERSE_HIDE_PASS = "REVERSE_HIDE PASS";
export const ON_FOCUS_CHANGE= "ON_FOCUS_CHANGE"

export const isEmptyChange=(value)=>{
    return {actionValue: value, type: IS_EMPTY_CHANGE}
}

export const onFocusChange=(value)=>{
    return {actionValue: value, type: ON_FOCUS_CHANGE}
}

export const reverseHidePass=(value)=>{
    return {actionValue: value, type: REVERSE_HIDE_PASS}
}

export const updatePass=(value)=>{
    return {actionValue: value, type: UPDATE_PASS}
}
export const updateMail=(value)=>{
    return {actionValue: value, type: UPDATE_MAIL}
}

