// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/interchain_accounts/host/v1/tx";
import { QueryParamsRequest } from "./types/ibc/applications/interchain_accounts/host/v1/query";
import { Params } from "./types/ibc/applications/interchain_accounts/host/v1/host";
import { MsgUpdateParams } from "./types/ibc/applications/interchain_accounts/host/v1/tx";
import { QueryParamsResponse } from "./types/ibc/applications/interchain_accounts/host/v1/query";
export { MsgUpdateParamsResponse, QueryParamsRequest, Params, MsgUpdateParams, QueryParamsResponse };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendMsgUpdateParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.params({ value: Params.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        msgUpdateParamsResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
            }
        },
        queryParamsRequest({ value }) {
            try {
                return { typeUrl: "/ibc.applications.interchain_accounts.host.v1.QueryParamsRequest", value: QueryParamsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
            }
        },
        params({ value }) {
            try {
                return { typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params", value: Params.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Params: Could not create message: ' + e.message);
            }
        },
        msgUpdateParams({ value }) {
            try {
                return { typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams", value: MsgUpdateParams.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
            }
        },
        queryParamsResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.interchain_accounts.host.v1.QueryParamsResponse", value: QueryParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            IbcApplicationsInterchainAccountsHostV1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;