import { registerApplication, start } from "single-spa";

registerApplication(
    "madrox",
    // @ts-ignore
    () => import('madrox/Madrox'),
    () => {
        return location.pathname.indexOf("/madrox") === 0;
    }
);

registerApplication(
    "saturn",
    // @ts-ignore
    () => import('saturn/Saturn'),
    () => {
        return location.pathname.indexOf("/saturn") === 0;
    }
);


start();