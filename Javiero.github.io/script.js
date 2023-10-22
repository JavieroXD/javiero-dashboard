const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
    // Redirect the user to the Discord OAuth2 login page
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1160139560970366997&redirect_uri=https://discord.com/oauth2/authorize?client_id=1160139560970366997&scope=bot&response_type=code&scope=identify';
});
