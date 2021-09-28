
export const ImgSrc = (svg: string) => {
    return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svg)))}`
}

export const EnumTypes = {'Login':'加入','LoginOut':'离开'}