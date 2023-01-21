import {CONTEXT_ITEM_CLICKED, URL_UPDATED_MESSAGE} from "../app/constants";

const pattern1 = "https://lp.qic-insured.com/";
const pattern2 = "http://localhost:8080/";
const urlPatterns = [`${pattern1}*`, `${pattern2}*`]

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
    title: 'Skipper: Fill this field automatically',
    contexts: ['editable'],
    visible: true,
    documentUrlPatterns: urlPatterns,
});

// chrome.contextMenus.create({
//     id: 'skipperSuggestionManual',
//     title: 'Skipper: Fill this field by variants',
//     contexts: ['editable'],
//     visible: true,
//     documentUrlPatterns: urlPatterns,
// });
// chrome.contextMenus.create({
//     id: `skipperSuggestionManual:qatarIdProvider`,
//     parentId: `skipperSuggestionManual`,
//     title: `Skipper: Qatar ID`,
//     contexts: ['editable'],
//     visible: true,
//     documentUrlPatterns: urlPatterns,
// });
// [].forEach(provider => {
//     console.log({ provider })
//     // chrome.contextMenus.create({
//     //     id: `skipperSuggestionManual:${provider.name}`,
//     //     parentId: `skipperSuggestionManual`,
//     //     title: `Skipper: ${provider.name}`,
//     //     contexts: ['editable'],
//     //     visible: true,
//     //     documentUrlPatterns: urlPatterns,
//     // });
// })

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (typeof info.menuItemId !== "number" && info.menuItemId.indexOf('skipperSuggestion') !== -1) {
        let payload = '';

        if (info.menuItemId.indexOf('skipperSuggestionManual') !== -1) {
            payload = info.menuItemId.replace('skipperSuggestionManual:', '');
        }

        chrome.tabs.sendMessage(tab.id, {
            message: CONTEXT_ITEM_CLICKED,
            payload,
        });
    }
});
