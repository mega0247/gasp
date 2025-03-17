export default {
  async fetch(request, env, ctx) {
    console.log("Request received:", request.url);

<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Function to generate a random string of a given length
>>>>>>> 6124bc8 (Initial commit)
=======
    // Function to generate a random string of a given length
>>>>>>> 8eb9530b6fc30daa5c9f4e40c107b42d218ee7a6
    function generateRandomString(length) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Generate a random prefix and suffix (each 3 characters)
>>>>>>> 6124bc8 (Initial commit)
=======
    // Generate a random prefix and suffix (each 3 characters)
>>>>>>> 8eb9530b6fc30daa5c9f4e40c107b42d218ee7a6
    function generateRandomPrefixSuffix() {
      return {
        prefix: generateRandomString(3), // 3-letter prefix (subdomain)
        suffix: generateRandomString(3)  // 3-letter suffix (end of path)
      };
    }

<<<<<<< HEAD
<<<<<<< HEAD
    const originalRedirectUrl = "https://earthrelocation.com";

    const trackingUrl = (code) => `https://www.google-analytics.com/collect?v=1&t=event&tid=UA-XXXXXXX-Y&cid=555&ec=redirect&ea=click&el=${code}&ev=1`;

=======
=======
>>>>>>> 8eb9530b6fc30daa5c9f4e40c107b42d218ee7a6
    // The URL where the user will ultimately be redirected.
    const originalRedirectUrl = "https://earthrelocation.com";

    // Function to generate an array of random links
<<<<<<< HEAD
>>>>>>> 6124bc8 (Initial commit)
=======
>>>>>>> 8eb9530b6fc30daa5c9f4e40c107b42d218ee7a6
    function generateRandomLinks(numLinks) {
      const links = [];
      for (let i = 0; i < numLinks; i++) {
        const { prefix, suffix } = generateRandomPrefixSuffix();
<<<<<<< HEAD
<<<<<<< HEAD
        const link = `https://${prefix}.eowsubluf.cfd/${suffix}`; // Uses the 3-letter prefix and suffix
=======
        // Build link in the format: http://<prefix>.127.0.0.1:8787/<suffix>
        const link = `http://${prefix}.127.0.0.1:8787/${suffix}`;
>>>>>>> 6124bc8 (Initial commit)
=======
        // Build link in the format: http://<prefix>.127.0.0.1:8787/<suffix>
        const link = `http://${prefix}.127.0.0.1:8787/${suffix}`;
>>>>>>> 8eb9530b6fc30daa5c9f4e40c107b42d218ee7a6
        links.push(link);
      }
      return links;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    const urlParts = new URL(request.url).pathname.split('/');
    console.log("URL parts:", urlParts);

    if (urlParts.length === 1 || urlParts[1] === "generate") {
      const randomLinks = generateRandomLinks(10); // Generate 10 links

      let htmlResponse = '<html><body><h2>Generated URLs</h2><ul>';
      randomLinks.forEach(link => {
        htmlResponse += `<li><a href="${link}">${link}</a></li>`;
=======
=======
>>>>>>> 8eb9530b6fc30daa5c9f4e40c107b42d218ee7a6
    // Parse the request URL
    const url = new URL(request.url);
    const pathname = url.pathname; // e.g., "/generate" or "/hf3"
    console.log("Pathname:", pathname);

    // If the URL is exactly "/generate", display the list of random links.
    if (pathname === "/generate") {
      const randomLinks = generateRandomLinks(10); // Generate 10 random links

      let htmlResponse = '<html><body><h2>Generated URLs</h2><ul>';
      randomLinks.forEach(link => {
        // Use target="_blank" so that clicking opens in a new tab (avoid potential blocking)
        htmlResponse += `<li><a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a></li>`;
<<<<<<< HEAD
>>>>>>> 6124bc8 (Initial commit)
=======
>>>>>>> 8eb9530b6fc30daa5c9f4e40c107b42d218ee7a6
      });
      htmlResponse += '</ul><button onclick="window.location.reload()">Generate New URLs</button></body></html>';

      return new Response(htmlResponse, {
<<<<<<< HEAD
<<<<<<< HEAD
        headers: { 'Content-Type': 'text/html' },
      });
    }

    const randomCode = urlParts[1];
    if (randomCode) {
      const trackingRequestUrl = trackingUrl(randomCode);
      fetch(trackingRequestUrl).catch(err => console.log("Error sending analytics: ", err));
    }

    return Response.redirect(originalRedirectUrl, 301);
=======
=======
>>>>>>> 8eb9530b6fc30daa5c9f4e40c107b42d218ee7a6
        headers: { 'Content-Type': 'text/html' }
      });
    }

    // For any other path (assumed to be a generated link), perform the redirect.
    // Here we assume the link will be in the form http://<random-prefix>.127.0.0.1:8787/<random-suffix>
    if (pathname.length > 1) {
      console.log("Detected generated link, redirecting to:", originalRedirectUrl);
      return Response.redirect(originalRedirectUrl, 301);
    }

    // Fallback response
    return new Response("Hello from the redirect worker!", {
      headers: { "Content-Type": "text/plain" }
    });
<<<<<<< HEAD
>>>>>>> 6124bc8 (Initial commit)
=======
>>>>>>> 8eb9530b6fc30daa5c9f4e40c107b42d218ee7a6
  },
};
