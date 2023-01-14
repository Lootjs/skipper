import { URL_UPDATED_MESSAGE, CONTEXT_ITEM_CLICKED } from "../app/constants";

const pattern1 = "https://lp.qic-insured.com/";
const pattern2 = "http://localhost:8080";
const isSupportedHosts = (url) => {
    return url.indexOf(pattern1) !== -1 || url.indexOf(pattern2) !== -1;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.url && isSupportedHosts(changeInfo.url)) {
        chrome.tabs.sendMessage(tabId, {
            message: URL_UPDATED_MESSAGE,
            url: changeInfo.url
        });
    }
});

chrome.contextMenus.create({
    id: 'skipperSuggestion',
    title: 'Skipper: Generate fake data',
    contexts: ['editable'],
    visible: true,
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log({ info })
    console.log({ tab })
    if (info.menuItemId === 'skipperSuggestion') {
        chrome.tabs.sendMessage(tab.id, {
            message: CONTEXT_ITEM_CLICKED,
            payload: '',
        });
    }
});
