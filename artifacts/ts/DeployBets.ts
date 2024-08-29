/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as DeployBetsContractJson } from "../DeployBets.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace DeployBetsTypes {
  export type Fields = {
    predictionTemplateId: HexString;
    punterChoiceTemplateId: HexString;
    contractIndex: bigint;
  };

  export type State = ContractState<Fields>;

  export type NewBetDeployedEvent = ContractEvent<{
    contractId: HexString;
    deployedFrom: Address;
    index: bigint;
  }>;
  export type BetDeletedEvent = ContractEvent<{
    contractId: HexString;
    deletedBy: Address;
    index: bigint;
  }>;

  export interface CallMethodTable {
    deployBet: {
      params: CallContractParams<{
        title: HexString;
        choicesName: [
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString
        ];
        endTimestamp: bigint;
        claimedByAnyoneTimestamp: bigint;
        endBeforeEnd: boolean;
        tokenIdToVote: HexString;
        tokenIdToHodl: HexString;
        amountToHodl: bigint;
      }>;
      result: CallContractResult<null>;
    };
    deleteBet: {
      params: CallContractParams<{
        contractIndexToDelete: bigint;
        deletor: Address;
      }>;
      result: CallContractResult<null>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
  export type MulticallReturnType<Callss extends MultiCallParams[]> =
    Callss["length"] extends 1
      ? MultiCallResults<Callss[0]>
      : { [index in keyof Callss]: MultiCallResults<Callss[index]> };

  export interface SignExecuteMethodTable {
    deployBet: {
      params: SignExecuteContractMethodParams<{
        title: HexString;
        choicesName: [
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString
        ];
        endTimestamp: bigint;
        claimedByAnyoneTimestamp: bigint;
        endBeforeEnd: boolean;
        tokenIdToVote: HexString;
        tokenIdToHodl: HexString;
        amountToHodl: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    deleteBet: {
      params: SignExecuteContractMethodParams<{
        contractIndexToDelete: bigint;
        deletor: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  DeployBetsInstance,
  DeployBetsTypes.Fields
> {
  encodeFields(fields: DeployBetsTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  eventIndex = { NewBetDeployed: 0, BetDeleted: 1 };
  consts = { ErrorCodes: { InvalidCaller: BigInt("1") } };

  at(address: string): DeployBetsInstance {
    return new DeployBetsInstance(address);
  }

  tests = {
    deployBet: async (
      params: TestContractParamsWithoutMaps<
        DeployBetsTypes.Fields,
        {
          title: HexString;
          choicesName: [
            HexString,
            HexString,
            HexString,
            HexString,
            HexString,
            HexString,
            HexString,
            HexString,
            HexString,
            HexString
          ];
          endTimestamp: bigint;
          claimedByAnyoneTimestamp: bigint;
          endBeforeEnd: boolean;
          tokenIdToVote: HexString;
          tokenIdToHodl: HexString;
          amountToHodl: bigint;
        }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "deployBet", params, getContractByCodeHash);
    },
    deleteBet: async (
      params: TestContractParamsWithoutMaps<
        DeployBetsTypes.Fields,
        { contractIndexToDelete: bigint; deletor: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "deleteBet", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const DeployBets = new Factory(
  Contract.fromJson(
    DeployBetsContractJson,
    "",
    "89aa9560810cce4fc08439d52bf20a839df9e40b4a8e57a35b0dc5065423af2c",
    []
  )
);

// Use this class to interact with the blockchain
export class DeployBetsInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<DeployBetsTypes.State> {
    return fetchContractState(DeployBets, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeNewBetDeployedEvent(
    options: EventSubscribeOptions<DeployBetsTypes.NewBetDeployedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      DeployBets.contract,
      this,
      options,
      "NewBetDeployed",
      fromCount
    );
  }

  subscribeBetDeletedEvent(
    options: EventSubscribeOptions<DeployBetsTypes.BetDeletedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      DeployBets.contract,
      this,
      options,
      "BetDeleted",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      DeployBetsTypes.NewBetDeployedEvent | DeployBetsTypes.BetDeletedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      DeployBets.contract,
      this,
      options,
      fromCount
    );
  }

  view = {
    deployBet: async (
      params: DeployBetsTypes.CallMethodParams<"deployBet">
    ): Promise<DeployBetsTypes.CallMethodResult<"deployBet">> => {
      return callMethod(
        DeployBets,
        this,
        "deployBet",
        params,
        getContractByCodeHash
      );
    },
    deleteBet: async (
      params: DeployBetsTypes.CallMethodParams<"deleteBet">
    ): Promise<DeployBetsTypes.CallMethodResult<"deleteBet">> => {
      return callMethod(
        DeployBets,
        this,
        "deleteBet",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    deployBet: async (
      params: DeployBetsTypes.SignExecuteMethodParams<"deployBet">
    ): Promise<DeployBetsTypes.SignExecuteMethodResult<"deployBet">> => {
      return signExecuteMethod(DeployBets, this, "deployBet", params);
    },
    deleteBet: async (
      params: DeployBetsTypes.SignExecuteMethodParams<"deleteBet">
    ): Promise<DeployBetsTypes.SignExecuteMethodResult<"deleteBet">> => {
      return signExecuteMethod(DeployBets, this, "deleteBet", params);
    },
  };
}
