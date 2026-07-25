// ===============================
// SLOT API
// ===============================

async function registerUser(username, email, password) {

    const url =
        API_URL +
        "?action=register" +
        "&username=" + encodeURIComponent(username) +
        "&email=" + encodeURIComponent(email) +
        "&password=" + encodeURIComponent(password);

    const res = await fetch(url);
    return await res.json();
}

async function loginUser(username, password) {

    const url =
        API_URL +
        "?action=login" +
        "&username=" + encodeURIComponent(username) +
        "&password=" + encodeURIComponent(password);

    const res = await fetch(url);
    return await res.json();
}
