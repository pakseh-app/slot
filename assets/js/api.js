// ============================
// SLOT API
// ============================

async function registerUser(username, email, password) {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                action: "register",

                username: username,

                email: email,

                password: password

            })

        });

        return await response.json();

    } catch (err) {

        return {

            success: false,

            message: err.message

        };

    }

}
