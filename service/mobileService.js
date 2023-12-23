const Mobile = require("../models/mobile");

const createMobile = async function (data) {
  const result = Mobile.create(data);
  return result;
};

const getAllMobile = async function () {
  const result = Mobile.find({});
  return result;
};

const deleteMobile = async function (id) {
  const result = Mobile.deleteOne({ _id: id });
  return result;
};

const updateMobile = async function (id, datas) {
  const result = Mobile.findOneAndUpdate({ _id: id }, datas, { new: true });
  return result;
};

const searchTerm = async (search) => {
  const result = await Mobile.find({
    $or: [
      { name: search },
      { price: search },
      { processor: search },
      { memory: search },
      { os: search },
    ],
  });
  return result;
};

const mobileService = {
  createMobile,
  getAllMobile,
  deleteMobile,
  updateMobile,
  searchTerm,
};

module.exports = mobileService;
