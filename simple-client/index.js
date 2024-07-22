/**
 * In order to enable two containers to communicate easily we created a bridge docker subnetwork and connected them to that network
 * Here we can see that instead of using an ip address, we use a domain address, defined in the terminal command when creating a container using --name
 * The port our api listens to is configured in the code and exposed in the dockerfile
 * When creating a container for the api, we don't necessarily need to expose the port to the host (using -p) because it will be used by our client
 */

fetch('http://quotely-api:3030/quotes')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching quotes:', error);
  });
