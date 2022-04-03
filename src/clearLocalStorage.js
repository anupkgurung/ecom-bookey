export const clearLocalStorage = ()=>{
    window.onbeforeunload = (e) => localStorage.clear()
}