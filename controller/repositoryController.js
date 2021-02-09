const getRepository = async (req, res) => {
  try {
    const { result } = req;
    
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
}

module.exports = {
  getRepository,
}

