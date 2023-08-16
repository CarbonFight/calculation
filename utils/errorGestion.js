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