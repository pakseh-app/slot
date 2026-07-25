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

    try {

        const res = await fetch(url);

        return await res.json();

    } catch (err) {

        return {
            success: false,
            message: err.message
        };

    }

}
