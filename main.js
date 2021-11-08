chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        "id": "1",
        "title": "Искать в Википедии - %s",
        "contexts": ["selection"]
    });
    chrome.contextMenus.onClicked.addListener(
        function (e) {
            chrome.tabs.create({
                url: `https://ru.wikipedia.org/wiki/${e.selectionText}`
            });
        }
    )
});
