import "mocha"

import { assert } from "chai"

import { rpcURL, repoData } from "./test"
import { Revo } from "./Revo"
import { Contract } from "./Contract"

describe("Revo", () => {
  const revo = new Revo(rpcURL, repoData)

  it("can instantiate a contract", () => {
    const contract = revo.contract("test/contracts/Methods.sol")
    assert.instanceOf(contract, Contract)
  })

  it("throws an error if contract is not known", () => {
    // assertThrow
    assert.throw(() => {
      revo.contract("test/contracts/Unknown.sol")
    })
  })
})
