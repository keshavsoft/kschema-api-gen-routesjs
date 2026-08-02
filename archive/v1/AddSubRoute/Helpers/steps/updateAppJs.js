import updateImports from "./UpdateRoutesJs/updateImports/index.js";
import updateAppUse from "./UpdateRoutesJs/updateUse/index.js";

export function updateAppJs({ appJsPath, endpoint }) {
    if (!fs.existsSync(appJsPath)) {
        if (showLog) console.log("app.js file not found ?");

        return false;
    };

    updateImports({ appJsPath, endpoint });
    updateAppUse({ appJsPath, endpoint });
};