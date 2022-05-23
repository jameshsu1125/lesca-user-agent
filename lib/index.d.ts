declare const UserAgent: {
    get: (tabletEqualDesktop?: boolean) => "desktop" | "mobile";
    facebook: () => boolean;
    ios: () => boolean;
    android: () => boolean;
    line: () => boolean;
    mac: () => boolean;
    pc: () => boolean;
};
export default UserAgent;
