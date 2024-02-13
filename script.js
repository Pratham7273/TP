function answer(response) {
    let message;

    if (response === 'yes') {
        message = "Happy Valentine's Day! I LOVE YOU MOREEEE🥰";
    } else if (response === 'no') {
        message = "Theek hai Samajh gaya😔";
    } else {
        message = "Invalid response. Please choose 'Yes' or 'No'.";
    }

    alert(message);

    // You can also perform additional actions based on the user's response
}
