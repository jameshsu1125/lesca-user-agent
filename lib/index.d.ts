export declare enum UserAgentType {
    Desktop = 0,
    Mobile = 1
}
declare const UserAgent: {
    get: (tabletEqualDesktop?: boolean) => UserAgentType;
    facebook: () => boolean;
    ios: () => boolean;
    android: () => boolean;
    line: () => boolean;
    mac: () => boolean;
    pc: () => boolean;
};
export default UserAgent;
