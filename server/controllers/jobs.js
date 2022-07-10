const getAllJobs = async (req, res) => {
  res.send("Get all jobs");
};

const getJob = async (req, res) => {
  res.send("Get Job");
};

const createJob = async (req, res) => {
  res.json(req.user);
};

const deleteJob = async (req, res) => {
  res.send("Delete Job");
};

const updateJob = async (req, res) => {
  res.send("Update Job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
