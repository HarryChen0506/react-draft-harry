const UniqueIndex = () => {
    if (isNaN(window.__EDITOR_UNIQUE_INDEX__)) {
        window.__EDITOR_UNIQUE_INDEX__ = 1
    } else {
        window.__EDITOR_UNIQUE_INDEX__ += 1
    }
    return window.__EDITOR_UNIQUE_INDEX__
}
export {
    UniqueIndex
}