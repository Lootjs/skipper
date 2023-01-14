import { URL_UPDATED_MESSAGE, CONTEXT_ITEM_CLICKED } from "../app/constants";
import {initInputHelpers, registerInputHelper} from "../app/init";
chrome.runtime.onMessage.addListener(
    function(request) {
        if (request.message === URL_UPDATED_MESSAGE) {
            setTimeout(initInputHelpers, 200);
        } else if (request.message === CONTEXT_ITEM_CLICKED) {
            registerInputHelper(document.activeElement as HTMLInputElement);
        }
    });

initInputHelpers()
