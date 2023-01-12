export function locStart(node: any) {
    return node.loc.start.offset;
}

export function locEnd(node: any) {
    return node.loc.end.offset;
}
