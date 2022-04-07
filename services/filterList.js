export function filterList(source) {
    return source
        .filter(({
            id,
            code,
            name,
        }) =>
            !(id === null || id === undefined || id?.length === 0)
            && code === "025"
            && name.includes("text")
        );
}
