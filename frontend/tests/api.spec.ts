const { test, expect } = require("@playwright/test");
import axios from "axios"

const url =" https://artlive2.herokuapp.com"
test.describe("api", () => {

  test("get all users", async () => {
    const response = await axios.get(`${url}/users/`);
    expect(response.data).toBeTruthy();
  });
  test("get all products", async () => {
    const response = await axios.get(`${url}/products/`);
    expect(response.data).toBeTruthy();
  });
});
