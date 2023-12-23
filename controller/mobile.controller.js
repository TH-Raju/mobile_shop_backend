const mobileService = require("../service/mobileService");

async function createMobile(req, res) {
  try {
    const addMobile = await mobileService.createMobile(req.body);
    let data = {
      success: true,
      status: 200,
      data: addMobile,
    };

    res.send(data);
  } catch (err) {
    console.log(err);
  }
}

async function getAllMobile(req, res) {
  const allMobile = await mobileService.getAllMobile();
  let data = {
    success: true,
    status: 200,
    data: allMobile,
  };

  res.send(data);
}

async function deleteMobile(req, res) {
  let id = req.params.id;
  let MobileDelete = await mobileService.deleteMobile(id);

  let data = {
    success: true,
    status: 200,
    data: MobileDelete,
  };

  res.send(data);
}

async function updateMobile(req, res) {
  let datas = req.body;
  let id = req.params.id;
  // console.log(id);
  let mobileUpdate = await mobileService.updateMobile(id, datas);
  // console.log(" data ", mobileUpdate);
  let data = {
    success: true,
    status: 200,
    data: mobileUpdate,
  };

  res.send(data);
}

async function searchTerm(req, res) {
  try {
    let search = req.query.searchTerm;
    const searchData = await mobileService.searchTerm(search);
    let data = {
      success: true,
      status: 200,
      searchData,
    };
    res.send(data);
  } catch (err) {
    console.log(err);
  }
}

const mobileController = {
  createMobile,
  getAllMobile,
  deleteMobile,
  updateMobile,
  searchTerm,
};

module.exports = mobileController;
