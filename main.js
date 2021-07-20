const SupexoClient = require('./Supexo');
const key          = 'hirnOJIIY+whe5YwOFqFYS4dl3HVFqsUEU48Ln4TvCvZ7h/W9Jukk+gq'; // API Key
const secret       = 'Y8KYoamKuG+jM8znrvFpnmrmB9BHKuGKl/VccavTG/8nbqYa7tVoF+VZsGtE/1BKLaMm0Hb48SjO4gQUsTOP5g=='; // API Private Key
const params = {
    nonce: new Date() * 1000,    
}
const client       = new SupexoClient(key, secret);
(async () => {
    try{

        // Display user's balance
        response = await client.api('DepositAddresses',params)
        console.log(response.result);
    }
    catch(err){console.log(err)}
})();
