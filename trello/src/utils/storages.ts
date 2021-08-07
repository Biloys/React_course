export const setToLocalStorages = <P> (key:string , data:P) => {
window.localStorage.setItem(key,JSON.stringify(data))
}

export const getFromLocalStorages = <T> (key:string) :T => {
    return JSON.parse(window.localStorage.getItem(key) || '{}');}