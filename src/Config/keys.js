export const backUrl = "http://localhost:7000";
export const language = localStorage.getItem("lang")
export const makeArray = (length) => {
    return new Array(length).fill(undefined).map((_, index) => index);
};