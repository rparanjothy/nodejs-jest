const get = url => {
  console.log("axios mock");
  return Promise.resolve({ data: { email: "rp@r.com" } });
};

module.exports = { get };
