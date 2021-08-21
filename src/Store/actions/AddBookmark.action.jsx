export const ADDBOOKMARKS = "ADDBOOKMARKS";
export const togleBookmarks = (id) => {
    return {
        type: ADDBOOKMARKS,
        payload: id
    }

}

