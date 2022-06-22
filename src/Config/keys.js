// export const backUrl = "http://localhost:7000";
export const backUrl = "https://jewelry001.herokuapp.com";
export const language = localStorage.getItem("lang")
export const makeArray = (length) => {
    return new Array(length).fill(undefined).map((_, index) => index);
};