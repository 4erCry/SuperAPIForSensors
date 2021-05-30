export default function checkAuthorization() {
    const isAuthorized = localStorage.getItem('isAuthorized');
    return !!(isAuthorized && isAuthorized == 'true');
}
