
/**
 * Handle and format errors for sending as JSON responses.
 *
 * @param {Error} error - The error object to handle.
 * @param {object} res - The response object.
 * @returns {object} The JSON response containing the error message.
 */
function errorGestion(error, res) {
    if (error.status === 400) {
        const errorMessage = error.message.replace(/"/g, '');
        return res.status(400).json({ message: errorMessage });
      } else {
        const errorMessage = error.message.replace(/"/g, '');
        return res.status(500).json({ message: errorMessage });
      }
  }


module.exports = errorGestion;
