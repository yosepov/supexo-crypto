### Supexo js API


 # api method makes a public or private API request.
    * @param  {String}   method   The API method (public or private)
    * @param  {Object}   params   Arguments to pass to the api call
    * @param  {Function} callback A callback function to be executed when the request is complete
     * @param  {Boolean} writeFile for only depositStatus method, if true write the response.result a json file (root).
    * @return {Object}            The request object
    */

# SupexoClient api methodsNames
 * public  : [ 'Time', 'Assets', 'AssetPairs', 'Ticker', 'Depth', 'Trades', 'Spread', 'OHLC' ],
 * private : [   'Ledgers', 'DepositAddresses', 'DepositStatus', "DepositMethods", "WalletTransfer" ],

 */
 



# SupexoClient connects to the Kraken.com API
 * @param {String}        key               API Key
 * @param {String}        secret            API Secret
 */
 
# publicMethod / privateMethod methods makes a public API request.
* @param  {String}   method   The API method (public or private)
* @param  {Object}   params   Arguments to pass to the api call
* @param  {Function} callback A callback function to be executed when the request is complete
* @return {Object}            The request object
*/


# Example:
const SupexoClient = require('supexo-js-api');
const key          = '...'; // API Key
const secret       = '...'; // API Private Key
const params = {
   nonce: new Date() * 1000,    
  asset: "XBT",
 method: "Bitcoin"
}
const client = new SupexoClient(key, secret);
(async () => {
    // Display user's balance
    response = await client.api('Assets',params)
    console.log(response.result);
})();
